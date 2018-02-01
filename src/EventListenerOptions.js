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
import IEventListenerOptions from "./IEventListenerOptions";

/**
 * 定义侦听器配置选项。
 * @implements {IEventListenerOptions}
 * @see {@link EventListener}
 * @see {@link EventDispatcher}
 * @since 1.0.0
 */
export default class EventListenerOptions /*< implements IEventListenerOptions >*/ {
    /**
     * 创建一个侦听器选项对象。
     * 
     * @param {IEventDispatcher} [scope=null] - 指定侦听器的作用域对象。
     * @param {Boolean} [once=false] - 指示侦听器是否在执行后，自动从派发器中移除。
     * @param {Boolean} [useCapture=false] - 指示侦听器是否在捕获阶段处理事件。
     * @param {Number} [priority=0] - 指示侦听器在派发事件时的优先级（事件派发时会优先执行高优先级的侦听器）。
     * @since 1.0.0
     */
    constructor( scope = null, once = false, useCapture = false, priority = 0 ) {
        /**
         * @type {IEventDispatcher}
         */
        this._scope = scope;
        
        /**
         * @type {Boolean}
         */
        this._once = once;
        
        /**
         * @type {Boolean}
         */
        this._useCapture = useCapture;
        
        /**
         * @type {Number}
         */
        this._priority = priority;
    }
    
    /**
     * 获取侦听器的作用域对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */
    get scope() {
        return this._scope;
    }
    
    /**
     * 指示侦听器是否在执行后，自动从派发器中移除。
     * @type {Boolean}
     * @since 1.0.0
     */
    get once() {
        return this._once;
    }
    
    /**
     * 指示侦听器是否在捕获阶段处理事件。
     * @type {Boolean}
     * @since 1.0.0
     */
    get useCapture() {
        return this._useCapture;
    }
    
    /**
     * 指示侦听器在派发事件时的优先级。
     * @type {Number}
     * @since 1.0.0
     */
    get priority() {
        return this._priority;
    }
    
    /**
     * 使用自定义的参数，初始化当前配置选项。
     * 
     * - 如果 `options` 是一个 `Boolean` 类型的值，则将 `options` 视为 {@link EventListenerOptions#useCapture}。
     * - 如果 `options` 是一个 `IEventListenerOptions` 类型的值，则拷贝 `options` 的值到当前配置选项中。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器的配置选项。
     * @example
     * const dispatcher = new EventDispatcher();
     * const options = new EventListenerOptions();
     * options.initWithParams({ "once": true, "scope": this });
     * 
     * dispatcher.addEventListener("custom", ( evt ) => {
     *     /// 该事件侦听器在执行后，会自动从 `dispatcher` 派发器中移除。
     *     console.log("success");
     * }, options);
     * 
     * dispatcher.dispatchEvent(new Event("custom", false, false));
     * @returns {this}
     * @since 1.0.0
     */
    initWithParams( options = false ) {
        if ( typeof options == "boolean" ) {
            this._useCapture = options;
        }
        
        else {
            if ( options.scope !== void 0 ) { this._scope = options.scope; }
            if ( options.once !== void 0 ) { this._once  = options.once; }
            if ( options.useCapture !== void 0 ) { this._useCapture = options.useCapture; }
            if ( options.priority !== void 0 ) { this._priority = options.priority; }
        }
        
        return this;
    }
}