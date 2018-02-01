/**
 * 定义侦听器配置选项的接口。
 * @interface
 */
export default class IEventListenerOptions {
    /**
     * 获取侦听器的作用域对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */
    get scope() {};
    
    /**
     * 指示侦听器是否在执行后，自动从派发器中移除。
     * @type {Boolean}
     * @since 1.0.0
     */
    get once() {};
    
    /**
     * 指示侦听器是否在捕获阶段处理事件。
     * @type {Boolean}
     * @since 1.0.0
     */
    get useCapture() {};
    
    /**
     * 指示侦听器在派发事件时的优先级。
     * @type {Number}
     * @since 1.0.0
     */
    get priority() {};
}