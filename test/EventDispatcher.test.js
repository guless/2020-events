import { Event, EventPhase, EventDispatcher } from "..";
import assert from "assert";

describe("事件派发器(EventDispatcher)", () => {
    it("基本用法", () => {
        const dispatcher = new EventDispatcher();
        const handler = ( evt ) => {};
        
        /// 校验返回类型
        assert.strictEqual(dispatcher.hasEventListener("any"), false, "hasEventListener() 没有返回 Boolean 类型的值");
        
        /// 注册侦听器
        dispatcher.addEventListener("basic", handler);
        assert.strictEqual(dispatcher.hasEventListener("basic"), true, "注册侦听器失败");
        
        /// 移除侦听器
        dispatcher.removeEventListener("basic", handler);
        assert.strictEqual(dispatcher.hasEventListener("basic"), false, "移除侦听器失败");
        
        /// 无效的侦听器
        assert.throws(() => { 
            dispatcher.addEventListener("throws"); 
        }, "注册空的侦听器时没有抛出异常");
        
        /// 捕获阶段
        dispatcher.addEventListener("capture", handler, true);
        assert.strictEqual(dispatcher.hasEventListener("capture"), true, "注册捕获阶段的侦听器失败");
        
        dispatcher.removeEventListener("capture", handler); // 确保这里不会删除侦听器。
        assert.strictEqual(dispatcher.hasEventListener("capture"), true, "意外移除了捕获阶段的侦听器");
        
        dispatcher.removeEventListener("capture", handler, true); // 移除捕获阶段的侦听器。
        assert.strictEqual(dispatcher.hasEventListener("capture"), false, "移除捕获阶段的侦听器失败");
        
        /// 指定事件阶段
        dispatcher.addEventListener("capture", ( evt ) => {}, { "useCapture": false });
        
        /// 指定作用域
        const scope = {};
        
        dispatcher.addEventListener("scope", function( evt ) {
            assert.strictEqual(this, scope, "当前作用域与指定的作用域不相同"); 
        }, { scope });
        
        dispatcher.dispatchEvent(new Event("scope"));
        
        /// 一次性侦听器
        dispatcher.addEventListener("once", ( evt ) => {}, { "once": true });
        dispatcher.dispatchEvent(new Event("once"));
        
        assert.strictEqual(dispatcher.hasEventListener("once"), false, "一次性侦听器在执行后没有被自动移除！");
        
        /// 侦听器优先级
        let priority = -1;
        
        dispatcher.addEventListener("priority", ( evt ) => {
            assert.strictEqual(priority, 2, "高优先级的侦听器没有提前的被执行！");
            priority = 1;
            
        }, { "priority": 1 });
        
        dispatcher.addEventListener("priority", ( evt ) => {
            assert.strictEqual(priority, -1, "提前执行了其他低优先级的侦听器。")
            priority = 2;
            
        }, { "priority": 2 });
        
        dispatcher.addEventListener("priority", ( evt ) => {
            assert.strictEqual(priority, 1, "优先级执行顺序错误！");
            priority = 0;
        });
        
        dispatcher.dispatchEvent(new Event("priority"));
        assert.strictEqual(priority, 0, "最终值不是低优先级的侦听器的值。");
    });
    
    it("进阶用法", () => {
        const dispatcher = new EventDispatcher();
        
        /// 使用 Symbol 作为事件类型。
        let type = Symbol("symbol event");
        let value = 0;
        
        dispatcher.addEventListener(type, ( evt ) => {
            value = 1;
        });
        
        dispatcher.dispatchEvent(type);
        assert.strictEqual(value, 1, "使用 Symbol 作为事件类型注册/派发事件失败！");
        
        /// 实现 IEventListener 接口的侦听器。
        let listener = {
            handleEvent( evt ) {
                assert.strictEqual(this, listener, "IEventListener 侦听器的作用域异常！");
            }
        };
        
        dispatcher.addEventListener("IEventListener", listener);
        dispatcher.dispatchEvent("IEventListener");
        
        /// 派发事件时注册新的侦听器。
        let state = 1;
        let handler = ( evt ) => { state = 2; };
        
        dispatcher.addEventListener("advanced", ( evt ) => {
            dispatcher.addEventListener("advanced", handler);
        }, { "once": true });
        
        dispatcher.dispatchEvent("advanced");
        
        assert.strictEqual(dispatcher.hasEventListener("advanced"), true, "在派发事件过程中注册事件失败！");
        assert.strictEqual(state, 1, "在派发事件过程中注册的事件被意外的执行了。");
        
        dispatcher.dispatchEvent("advanced");
        
        assert.strictEqual(state, 2, "派发事件过程中注册的侦听器在后续派发过程中无法被执行！");
        
        /// 使用非 IEventListenerOptions 类型的对象移除事件。
        dispatcher.removeEventListener("advanced", handler, { "useCapture": false });
        assert.strictEqual(dispatcher.hasEventListener("advanced"), false, "使用 IEventListenerOptions 类型的值无法移除侦听器。");
        
        /// 派发相同的事件
        let event = new Event("same");
        
        assert.throws(() => {
            dispatcher.dispatchEvent(event);
            dispatcher.dispatchEvent(event);
            
        }, "多次派发同一个事件时没有跑出异常!");
    });
    
    it("事件流", () => {
        class Node extends EventDispatcher {
            constructor( parent = null ) { super(); this.parent = parent; }
        }
        
        const root   = new Node(null);
        const parent = new Node(root);
        const child  = new Node(parent);
        
        root.addEventListener("through", ( evt ) => {
            assert.strictEqual(evt.eventPhase, EventPhase.CAPTURING_PHASE, "事件状态不是捕获阶段。");
        }, true);
        
        parent.addEventListener("through", ( evt ) => {
            assert.strictEqual(evt.eventPhase, EventPhase.BUBBLING_PHASE, "事件状态不是冒泡阶段。");
        });
        
        child.addEventListener("through", ( evt ) => {
            assert.strictEqual(evt.eventPhase, EventPhase.AT_TARGET, "事件状态不是目标阶段。");
        }, true);
        
        child.addEventListener("through", ( evt ) => {
            assert.strictEqual(evt.eventPhase, EventPhase.AT_TARGET, "事件状态不是目标阶段。");
        }, true);
        
        child.dispatchEvent(new Event("through", true, true));
        
        /// 默认行为
        assert.strictEqual((new Event("default", false, true)).cancelable, true, "事件应该可以取消默认行为！");
        
        child.addEventListener("default", ( evt ) => {
            evt.preventDefault();
        });
        
        assert.strictEqual(child.dispatchEvent(new Event("default", false, false)), true, "默认行为不能被取消！");
        assert.strictEqual(child.dispatchEvent(new Event("default", false, true)), false, "无法取消默认行为！");
        
        /// 事件传递
        let isTarget = false;
        let isBubble = false;
        
        root.addEventListener("capture", ( evt ) => {
            evt.stopPropagation();
        }, true);
        
        child.addEventListener("capture", ( evt ) => {
            isTarget = true;
        });
        
        assert.strictEqual(child.dispatchEvent(new Event("capture", true, true)), false, "派发事件没有传递到目标对象时，应该返回 false。");
        assert.strictEqual(isTarget, false, "无法在捕获阶段中断事件传递!");
        
        child.addEventListener("target", ( evt ) => {
            evt.stopPropagation();
        });
        
        parent.addEventListener("target", ( evt ) => {
            isBubble = true;
        });
        
        assert.strictEqual(child.dispatchEvent(new Event("target", true, true)), true, "派发事件到达目标对象时，没有取消默认行为则应该返回 true。");
        assert.strictEqual(isBubble, false, "无法在目标阶段中断事件传递！");
        
        /// 立刻中断事件传递。
        let immediate = 0;
        
        child.addEventListener("immediate", ( evt ) => {
            immediate = 1;
            evt.stopImmediatePropagation();
        });
        
        child.addEventListener("immediate", ( evt ) => {
            immediate = 2;
        });
        
        child.dispatchEvent(new Event("immediate", true, true));
        assert.strictEqual(immediate, 1, "无法立刻中断事件传递！");
    });
    
    it("事件代理", () => {
        const target = {};
        const dispatcher = new EventDispatcher(target);
        
        let success = false;
        
        target.addEventListener("delegate", function( evt ) {
            assert.strictEqual(this, target, "事件代理的侦听器的作用域异常！");
            success = true;
        });
        
        target.dispatchEvent("delegate");
        assert.strictEqual(success, true, "创建事件代理失败！");
        
        /**
         * 无法被代理的对象。
         */
        assert.throws(() => {
            new EventDispatcher(new EventDispatcher());
            
        }, "为已经实现事件系统的对象创建代理时没有抛出异常！");
    });
});