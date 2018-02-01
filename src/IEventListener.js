import Event from "./Event";

/**
 * 定义事件侦听器对象的接口。
 * @interface
 */
export default class IEventListener {
    /**
     * 处理一个事件对象。
     * @param {Event} event - 指定派发的事件对象。
     */
    handleEvent( event ) {};
}