/**
 * 定义所有具备事件派发功能对象的接口。
 * @interface
 * @since 1.0.0
 */
export default class IEventDispatcher {
    /**
     * 注册一个事件侦听器。
     * @param {String|Symbol} type - 注册的事件类型。
     * @param {Function|IEventListener} handler - 指定事件处理函数或者是一个事件侦听器。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器配置选项。
     * @since 1.0.0
     */
    addEventListener( type, handler, options ) {};
    
    /**
     * 移除一个事件侦听器。
     * @param {String|Symbol} type - 移除的事件类型。
     * @param {Function|IEventListener} handler - 指定要移除的事件处理函数或者事件侦听器。
     * @param {Boolean} [useCapture=false] - 指定是移除捕获阶段(`true`)还是冒泡阶段(`false`)的事件侦听器。
     * @since 1.0.0
     */
    removeEventListener( type, handler, useCapture ) {};
    
    /**
     * 检查是否注册了指定类型的事件侦听器。
     * @param {String|Symbol} type - 检查的事件类型。
     * @returns {Boolean} - 如果存在指定类型的侦听器则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    hasEventListener( type ) {};
    
    /**
     * 派发一个事件对象到目标对象的事件流中。
     * @param {Event} event - 指定派发的事件对象。
     * @returns {Boolean} - 如果事件传递到了当前目标对象，并且没有被取消默认行为。则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    dispatchEvent( event ) {};
}