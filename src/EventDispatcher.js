/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2018 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 1.0.0 | https://api.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///                                              }|
///                                              }|
///                                              }|     　 へ　　　 ／|    
///      _______     _______         ______      }|      /　│　　 ／ ／
///     /  ___  |   |_   __ \      .' ____ '.    }|     │　Z ＿,＜　／　　 /`ヽ
///    |  (__ \_|     | |__) |     | (____) |    }|     │　　　　　ヽ　　 /　　〉
///     '.___`-.      |  __ /      '_.____. |    }|      Y　　　　　`　 /　　/
///    |`\____) |    _| |  \ \_    | \____| |    }|    ｲ●　､　●　　⊂⊃〈　　/
///    |_______.'   |____| |___|    \______,'    }|    ()　 v　　　　|　＼〈
///    |=========================================\|    　>ｰ ､_　 ィ　 │ ／／
///    |> LESS IS MORE                           ||     / へ　　 /　ﾉ＜|＼＼
///    `=========================================/|    ヽ_ﾉ　　(_／　 │／／
///                                              }|     7　　　　　　  |／
///                                              }|     ＞―r￣￣`ｰ―＿`
///                                              }|
///                                              }|
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in all
/// copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.
import IEventDispatcher from "./IEventDispatcher";
import IEventListener from "./IEventListener";
import IEventListenerOptions from "./IEventListenerOptions";
import Event from "./Event";
import EventPhase from "./EventPhase";
import EventListener from "./EventListener";

/**
 * 定义所有具备事件派发功能对象的基类。
 * @implements {IEventDispatcher}
 * @since 1.0.0
 */
export default class EventDispatcher /*< implements IEventDispatcher >*/ {
    /**
     * 创建一个事件派发器。
     * @param {IEventDispatcher} [target=null] - 指定派发器的代理目标对象。
     * @since 1.0.0
     */
    constructor( target = null ) {
        /**
         * @type {IEventDispatcher}
         */
        this._targetDispatcher = (target || this);
        
        /**
         * @type { {[type:String|Symbol]:Array<EventListener>} }
         */
        this._listenerRegister = {};
        
        /**
         * @type { {type:String|Symbol}: Boolean }
         */
        this._listenerLockers = {};
        
        /** 事件代理 */
        if ( this !== this._targetDispatcher ) {
            if ( this._targetDispatcher.hasEventListener || this._targetDispatcher.addEventListener || this._targetDispatcher.removeEventListener || this._targetDispatcher.dispatchEvent ) {
                throw new TypeError("无法为目标对象创建代理，因为其自身已经实现了一套事件系统。");
            }
            
            this._targetDispatcher.addEventListener     = this.addEventListener    .bind(this);
            this._targetDispatcher.removeEventListener  = this.removeEventListener .bind(this);
            this._targetDispatcher.hasEventListener     = this.hasEventListener    .bind(this);
            this._targetDispatcher.dispatchEvent        = this.dispatchEvent       .bind(this);
            this._targetDispatcher._dispatchToListeners = this._dispatchToListeners.bind(this);
        }
    }
    
    /**
     * 注册一个事件侦听器。
     * 
     * 如果浏览器支持 {@link Symbol} 类型，则事件类型可以使用 {@link Symbol} 对象，这样可以防止
     * 你的事件被其他人意外的移除。
     * 
     * 事件侦听器可以注册到派发事件的任何一个阶段，**捕获阶段**和**冒泡阶段**的侦听器是相互独立的。
     * 因此使用不同的 `useCapture` 值将注册不同的侦听器。同样移除的时候，也需要指定不同的 `useCapture` 值。 
     * 
     * 事件处理函数默认的作用域为派发器（`EventDispatcher`）对象或者其代理的对象，通过设置 `options.scope` 
     * 可以为事件处理函数指定作用域。但是如果注册的是一个实现了 {@link IEventListener} 接口的对象，则直接
     * 调用其 `handleEvent()` 方法处理事件，并且作用域始终指向该 `IEventListener` 对象。
     * 
     * 通过指定 `options.once` 选项，可以指定侦听器在执行后，是否自动从列表中移除。
     * 
     * 优先级高（`options.priority`）的侦听器会在派发事件时优先调用。相同优先级的情况会按照注册的先后
     * 顺序调用侦听器。分别使用不同的优先级注册相同的侦听器时，以最后一次注册的侦听器为准。
     * 
     * @param {String|Symbol} type - 事件类型。
     * @param {Function|IEventListener} handler - 指定事件处理函数或者是一个事件侦听器。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器配置选项。
     * @example
     * const dispatcher = new EventDispatcher();
     * 
     * /// 在冒泡阶段注册侦听器。
     * dispatcher.addEventListener("custom", ( evt ) => {});
     * dispatcher.addEventListener("custom", ( evt ) => {}, false);
     * 
     * /// 在捕获阶段注册侦听器。
     * dispatcher.addEventListener("custom", ( evt ) => {}, true);
     * 
     * /// 指定事件处理函数的作用域。
     * const target = {};
     * dispatcher.addEventListener("custom", ( evt ) => {
     *     console.log(target === this); // true
     * }, { "scope": target });
     * 
     * /// 注册一次性的侦听器。
     * dispatcher.addEventListener("custom", ( evt ) => {
     *     /// 该函数执行后，将自动从列表中移除。
     * }, { "once": true });
     * 
     * /// 尽管该侦听器后注册的，但是因为具有较高的优先级，所以会先被调用。
     * dispatcher.addEventListener("custom", ( evt ) => {
     *     console.log(1);
     * }, { "priority": 1 });
     * 
     * /// 相同的侦听器使用不用的优先级多次注册，以最后一次注册的优先级为准。
     * const handler = ( evt ) => {};
     * dispatcher.addEventListener("custom", handler, { "priority": 1 });
     * dispatcher.addEventListener("custom", handler, { "priority": 2 }); // 只会注册一个优先级为 2 的侦听器。
     * @see {@link IEventListenerOptions}
     * @since 1.0.0
     */
    addEventListener( type, handler, options = false ) {
        if ( !handler ) {
            throw new TypeError("handler 必须为事件处理函数(function)或者是事件侦听器(IEventListener)。");
        }
        
        const listener = new EventListener(handler, options);
        
        /**
         * 在事件派发过程中修改侦听器列表会导致派发顺序错误，因此这里需要拷贝侦听器列表的副本。
         * 
         * @example
         * const dispatcher = new EventDispatcher();
         * dispatcher.addEventListener("custom", () => { // 如果不锁定侦听器列表的化，这里将产生一个死循环。
         *     console.log(1}; 
         *     dispatcher.addEventListener("custom", () => {}, { "priority": 1 });
         * });
         * dispatcher.dispatchEvent(new Event("custom", false, false"));
         */
        if ( this._listenerLockers[type] ) {
            this._listenerLockers[type] = false;
            this._listenerRegister[type] = this._listenerRegister[type].slice(0);
        }
        
        /// 移除重复的事件侦听器。
        this.removeEventListener(type, handler, listener.options.useCapture);
        
        /// 没有为 type 类型的事件注册侦听器。
        if ( !this.hasEventListener(type) ) {
            this._listenerRegister[type] = [listener];
            return;
        }
        
        /// 为 type 类型已经注册的侦听器列表。
        const items = this._listenerRegister[type];
        
        /**
         * 一般情况下，我们注册的侦听器的优先级都是默认的 0。因此这里可以先对比插入的侦听器的优先级是否为最低的优先级。
         * 如果是则直接放入列表末尾。从而减少为插入侦听器而遍历列表的次数。
         */
        if ( items[items.length - 1].options.priority >= listener.options.priority ) {
            items.push(listener);
            return;
        }
        
        /**
         * 按照侦听器注册的顺序以及侦听器优先级的大小插入列表。
         * - 1, 优先越高的侦听器放到列表的前面。
         * - 2, 相同优先级的情况，先注册的侦听器放到列表的前面。
         */
        let insertAt = items.length - 1;
        while( ((insertAt >= 0) && (items[insertAt].options.priority < listener.options.priority)) ) { --insertAt; }
        
        items.splice(1 + insertAt, 0, listener);
    }
    
    /**
     * 移除一个事件侦听器。
     * 
     * 第三个参数 `useCapture` 可以是一个 {@link Boolean} 类型的值，或者是一个 {@link IEventListenerOptions} 类型的值。
     * 
     * 只有完全相同（使用 === 对比）的侦听器才会被移除。因此使用 `useCapture=false` 并不会移除**捕获阶段**的侦听器。
     * 同理 `useCapture=true` 也不会移除**冒泡阶段**的侦听器。
     * 
     * @param {String|Symbol} type - 事件类型。
     * @param {Function|IEventListener} handler - 指定要移除的事件处理函数或者事件侦听器。
     * @param {Boolean|IEventListenerOptions} [useCapture=false] - 指定是移除捕获阶段(`true`)还是冒泡阶段(`false`)的事件侦听器。
     * @example
     * /// 使用不用类型的 useCapture 值移除侦听器。
     * dispatcher.removeEventListener(type, handler, false);
     * dispatcher.removeEventListener(type, handler, { "useCapture": true });
     * 
     * /// 分别移除不用阶段的侦听器。
     * const dispatcher = new EventDispatcher();
     * 
     * function captureHandler( evt ) {
     *     console.log("capture");
     * }
     * 
     * dispatcher.addEventListener("custom", captureHandler, true);
     * dispatcher.removeEventListener("custom", captureHandler, false); // 这里并不会移除 captureHandler 侦听器。
     * dispatcher.hasEventListener("custom"); // true
     * dispatcher.removeEventListener("custom", captureHandler, true); // 这里才会移除 captureHandler 侦听器。
     * dispatcher.hasEventListener("custom"); // false
     * @since 1.0.0
     */
    removeEventListener( type, handler, useCapture = false ) {
        if ( !this.hasEventListener(type) ) {
            return;
        }
        
        /**
         * 如果 `useCapture` 是一个 {@link IEventListenerOptions} 对象，则获取 `IEventListenerOptions.useCapture` 的值。
         */
        if ( typeof useCapture != "boolean" ) {
            /** @type {IEventListenerOptions} */
            const options = useCapture;
            useCapture = (options.useCapture !== void 0 ? options.useCapture : false);
        }
        
        /**
         * 在事件派发过程中修改侦听器列表会导致派发顺序错误，因此这里需要拷贝侦听器列表的副本。
         * @see {@link EventDispatcher#addEventListener}
         */
        if ( this._listenerLockers[type] ) {
            this._listenerLockers[type] = false;
            this._listenerRegister[type] = this._listenerRegister[type].slice(0);
        }
        
        for ( let i = 0, items = this._listenerRegister[type]; i < items.length; ++i ) {
            /**
             * 只有完全相同（使用 === 对比）的侦听器才会被移除。
             */
            if ( handler === items[i].handler && useCapture === items[i].options.useCapture ) {
                items.splice(i, 1);
                break;
            }
        }
    }
    
    /**
     * 检查是否注册了指定类型的事件侦听器。
     * @param {String|Symbol} type - 事件类型。
     * @example
     * const dispatcher = new EventDispatcher();
     * dispatcher.addEventListener("custom", ( evt ) => {}, false);
     * 
     * console.log(dispatcher.hasEventListener("custom")); // true
     * console.log(dispatcher.hasEventListener("notexists")); // false
     * @returns {Boolean} - 如果存在指定类型的侦听器则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    hasEventListener( type ) {
        return (!!this._listenerRegister[type] && this._listenerRegister[type].length >= 1);
    }
    
    /**
     * 派发一个事件对象到目标对象的事件流中。
     * @param {Event|String|Symbol} event - 指定派发的事件对象。
     * @example
     * const dispatcher = new EventDispatcher();
     * 
     * dispatcher.dispatchEvent(new Event("custom", false, false)); // 派发一个不冒泡的事件。
     * dispatcher.dispatchEvent(new Event("custom", true, false)); // 派发一个参与冒泡的事件。
     * @returns {Boolean} - 如果事件传递到了当前目标对象，并且没有被取消默认行为。则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    dispatchEvent( event ) {
        if ( typeof event == "string" || typeof event == "symbol" ) {
            event = new Event(event);
        }
        
        /// 该事件对象已经被派发过一次！
        if ( event.target || event.eventPhase !== EventPhase.NONE ) {
            throw new Error("同一个事件对象不能派发多次！");
        }
        
        event._target = this._targetDispatcher; // 设置事件目标对象。
        
        /**
         * 满足以下条件时，直接调度事件至目标阶段：
         * 
         * 1) 事件不参与冒泡行为。
         * 2) 目标对象没有加入显示对象列表。
         */
        if ( !event.bubbles || !event.target.parent 
            /*< 防止根级别对象循环引用 >*/ || (event.target === event.target.parent) ) {
            
            event._eventPhase = EventPhase.AT_TARGET;
            event._currentTarget = event.target;
            
            if ( event.currentTarget._dispatchToListeners ) {
                event.currentTarget._dispatchToListeners(event);
            }
            
            event._currentTarget = null; // 事件派发完成后，删除事件对当前目标的引用。
            return !event.defaultPrevented;
        }
        
        /**
         * 查找事件传递路径。
         */
        let target = event.target;
        let path = [target];
        
        while( target.parent && target !== target.parent ) { path.push(target = target.parent); }
        
        /**
         * 捕获阶段。
         */
        event._eventPhase = EventPhase.CAPTURING_PHASE;
        
        for ( let i = path.length - 1; i >= 1 && !event._stopPropagation; --i ) {
            event._currentTarget = path[i];
            
            if ( event.currentTarget._dispatchToListeners ) {
                event.currentTarget._dispatchToListeners(event);
            }
        }
        
        if ( event._stopPropagation ) { // 事件在捕获阶段被中断。
            event._currentTarget = null;
            return false;
        }
        
        /**
         * 目标阶段。
         */
        event._eventPhase = EventPhase.AT_TARGET;
        event._currentTarget = event.target;
        
        if ( event.currentTarget._dispatchToListeners ) {
            event.currentTarget._dispatchToListeners(event);
        }
        
        if ( event._stopPropagation ) {
            event._currentTarget = null;
            return !event.defaultPrevented;
        }
        
        /**
         * 冒泡阶段。
         */
        event._eventPhase = EventPhase.BUBBLING_PHASE;
        
        for ( let i = 0; i < path.length && !event._stopPropagation; ++i ) {
            event._currentTarget = path[i];
            
            if ( event.currentTarget._dispatchToListeners ) {
                event.currentTarget._dispatchToListeners(event);
            }
        }
        
        event._currentTarget = null;
        return !event.defaultPrevented;
    }
    
    /**
     * 执行所有的侦听器。
     * @param {Event} event - 指定派发的事件对象。
     */
    _dispatchToListeners( event ) {
        if ( !this.hasEventListener(event.type) ) {
            return;
        }
        
        /**
         * 锁定侦听器列表。
         */
        this._listenerLockers[event.type] = true;
        
        /**
         * 执行侦听器
         */
        for ( let i = 0, items = this._listenerRegister[event.type]; i < items.length && !event._stopImmediatePropagation; ++i ) {
            /** @type {EventListener} */
            const listener = items[i];
            
            switch( event.eventPhase ) {
                case EventPhase.CAPTURING_PHASE :
                    if ( listener.options.useCapture ) { listener.handleEvent(event); }
                    break;
                    
                case EventPhase.AT_TARGET :
                    listener.handleEvent(event);
                    break;
                    
                case EventPhase.BUBBLING_PHASE :
                    if ( !listener.options.useCapture ) { listener.handleEvent(event); }
                    break;
                
                default: break;
            }
            
            /**
             * 自动移除一次性的侦听器。
             */
            if ( listener.options.once ) {
                this.removeEventListener(event.type, listener.handler, listener.options.useCapture);
            }
        }
    }
}