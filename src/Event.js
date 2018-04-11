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
import EventPhase from "./EventPhase";

/**
 * 定义 {@link EventDispatcher} 派发的事件对象。
 * @see {@link EventDispatcher}
 * @since 1.0.0
 */
export default class Event {
    /**
     * 创建一个事件对象。
     * 
     * @param {String|Symbol} type - 事件类型。
     * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
     * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
     * @since 1.0.0
     */
    constructor( type, bubbles = false, cancelable = true ) {
        /**
         * @type {String|Symbol}
         */
        this._type = type;
        
        /**
         * @type {Boolean}
         */
        this._bubbles = bubbles;
        
        /**
         * @type {Boolean}
         */
        this._cancelable = cancelable;
        
        /**
         * @type {IEventDispatcher}
         */
        this._target = null;
        
        /**
         * @type {IEventDispatcher}
         */
        this._currentTarget = null;
        
        /**
         * @type {EventPhase}
         */
        this._eventPhase = EventPhase.NONE;
        
        /**
         * @type {Boolean}
         */
        this._defaultPrevented = false;
        
        /**
         * @type {Boolean}
         */
        this._stopPropagation = false;
        
        /**
         * @type {Boolean}
         */
        this._stopImmediatePropagation = false;
    }
    
    /**
     * 获取事件类型。
     * @type {String|Symbol}
     * @since 1.0.0
     */
    get type() {
        return this._type
    }
    
    /**
     * 指示该事件是否参与冒泡行为。
     * @type {Boolean}
     * @since 1.0.0
     */
    get bubbles() {
        return this._bubbles;
    }
    
    /**
     * 指示该事件是否可以取消默认行为。
     * @type {Boolean}
     * @since 1.0.0
     */
    get cancelable() {
        return this._cancelable;
    }
    
    /**
     * 获取事件的目标对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */
    get target() {
        return this._target;
    }
    
    /**
     * 获取事件的当前对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */
    get currentTarget() {
        return this._currentTarget;
    }
    
    /**
     * 获取事件的当前阶段。
     * @type {EventPhase}
     * @since 1.0.0
     */
    get eventPhase() {
        return this._eventPhase;
    }
    
    /**
     * 指示该事件是否已经取消了默认行为。
     * @type {Boolean}
     * @since 1.0.0
     */
    get defaultPrevented() {
        return this._defaultPrevented;
    }
    
    /**
     * 重置事件状态（允许外部复用事件对象）。
     * 
     * @param {String|Symbol} type - 事件类型。
     * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
     * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
     * @returns {this}
     * @since 1.0.11
     */
    reset( type, bubbles = false, cancelable = false ) {
        this._type = type;
        this._bubbles = bubbles;
        this._cancelable = cancelable;
        this._target = null;
        this._currentTarget = null;
        this._eventPhase = EventPhase.NONE;
        this._defaultPrevented = false;
        this._stopPropagation = false;
        this._stopImmediatePropagation = false;
        return this;
    }
    
    /**
     * 如果事件可以取消(`cancelable == true`)默认行为，则取消该事件的默认行为。
     * @see {@link Event#cancelable}
     * @since 1.0.0
     */
    preventDefault() {
        this._cancelable && (this._defaultPrevented = true);
    }
    
    /**
     * 停止事件冒泡，后续所有节点的侦听器都将不会收到该事件通知。
     * @see {@link EventDispatcher#dispatchEvent}
     * @since 1.0.0
     */
    stopPropagation() {
        this._stopPropagation = true;
    }
    
    /**
     * 立即停止事件冒泡，当前节点以及后续所有节点的侦听器都将不会收到该事件通知。
     * @see {@link EventDispatcher#dispatchEvent}
     * @since 1.0.0
     */
    stopImmediatePropagation() {
        this._stopPropagation = true;
        this._stopImmediatePropagation = true;
    }
}