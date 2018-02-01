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
     */
    constructor( target = null ) {
        /**
         * @type {IEventDispatcher}
         */
        this._eventTarget = (target || this);
        
        /**
         * @type { {[type:string]:Array<EventListener>} }
         */
        this._eventRegister = {};
    }
    
    /**
     * 注册一个事件侦听器。
     * @param {String|Symbol} type - 注册的事件类型。
     * @param {Function|IEventListener} listener - 指定事件处理函数或者是一个事件侦听器。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器配置选项。
     */
    addEventListener( type, listener, options = false ) {
        
        
    }
    
    /**
     * 移除一个事件侦听器。
     * @param {String|Symbol} type - 移除的事件类型。
     * @param {Function|IEventListener} listener - 指定要移除的事件处理函数或者事件侦听器。
     * @param {Boolean} [useCapture=false] - 指定是移除捕获阶段(`true`)还是冒泡阶段(`false`)的事件侦听器。
     */
    removeEventListener( type, listener, useCapture = false ) {
        
        
    }
    
    /**
     * 检查是否注册了指定类型的事件侦听器。
     * @param {String|Symbol} type - 检查的事件类型。
     * @returns {Boolean} - 如果存在指定类型的侦听器则返回 `true`，否则返回 `false`。
     */
    hasEventListener( type ) {
        
        
    }
    
    /**
     * 派发一个事件对象到目标对象的事件流中。
     * @param {Event} event - 指定派发的事件对象。
     * @returns {Boolean} - 如果事件传递到了当前目标对象，并且没有被取消默认行为。则返回 `true`，否则返回 `false`。
     */
    dispatchEvent( event ) {
        
        
    }
}