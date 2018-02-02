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
import IEventListener from "./IEventListener";
import IEventListenerOptions from "./IEventListenerOptions";
import Event from "./Event";
import EventListenerOptions from "./EventListenerOptions";

/**
 * 定义 {@link EventDispatcher} 的事件侦听器对象。
 * @implements {IEventListener}
 * @since 1.0.0
 */
export default class EventListener /*< implement IEventListener >*/ {
    /**
     * 创建一个侦听器对象。
     * 
     * @param {Function|IEventListener} handler - 指定事件处理函数或者是一个侦听器。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器的配置选项。
     * @since 1.0.0
     */
    constructor( handler, options = false ) {
        /**
         * @type {Function|IEventListener}
         */
        this._handler = handler;
        
        /**
         * @type {EventListenerOptions}
         */
        this._options = (new EventListenerOptions()).initWithParams(options);
    }
    
    /**
     * 获取侦听器的处理函数。
     * @type {Function|IEventListener}
     * @since 1.0.0
     */
    get handler() {
        return this._handler;
    }
    
    /**
     * 获取侦听器的配置选项。
     * @type {EventListenerOptions}
     * @since 1.0.0
     */
    get options() {
        return this._options;
    }
    
    /**
     * 处理一个事件对象。
     * @param {Event} event - 指定派发的事件对象。
     * @since 1.0.0
     */
    handleEvent( event ) {
        if ( (typeof this._handler.handleEvent == "function") ) {
            this._handler.handleEvent(event);
        }
        
        else {
            this._handler.call(this._options.scope || event.currentTarget, event);
        }
    }
}