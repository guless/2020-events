module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IEventDispatcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventPhase__ = __webpack_require__(5);


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



/**
 * 定义 {@link EventDispatcher} 派发的事件对象。
 * @see {@link EventDispatcher}
 * @since 1.0.0
 */

var Event = function () {
  /**
   * 创建一个事件对象。
   * 
   * @param {String|Symbol} type - 事件类型。
   * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
   * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
   * @since 1.0.0
   */
  function Event(type) {
    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Event);

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
    this._eventPhase = __WEBPACK_IMPORTED_MODULE_3__EventPhase__["a" /* default */].NONE;

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


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Event, [{
    key: "reset",


    /**
     * 重置事件状态（允许外部复用事件对象）。
     * 
     * @param {String|Symbol} type - 事件类型。
     * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
     * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
     * @returns {this}
     * @since 1.0.11
     */
    value: function reset(type) {
      var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._type = type;
      this._bubbles = bubbles;
      this._cancelable = cancelable;
      this._target = null;
      this._currentTarget = null;
      this._eventPhase = __WEBPACK_IMPORTED_MODULE_3__EventPhase__["a" /* default */].NONE;
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

  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this._cancelable && (this._defaultPrevented = true);
    }

    /**
     * 停止事件冒泡，后续所有节点的侦听器都将不会收到该事件通知。
     * @see {@link EventDispatcher#dispatchEvent}
     * @since 1.0.0
     */

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stopPropagation = true;
    }

    /**
     * 立即停止事件冒泡，当前节点以及后续所有节点的侦听器都将不会收到该事件通知。
     * @see {@link EventDispatcher#dispatchEvent}
     * @since 1.0.0
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._stopPropagation = true;
      this._stopImmediatePropagation = true;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }

    /**
     * 指示该事件是否参与冒泡行为。
     * @type {Boolean}
     * @since 1.0.0
     */

  }, {
    key: "bubbles",
    get: function get() {
      return this._bubbles;
    }

    /**
     * 指示该事件是否可以取消默认行为。
     * @type {Boolean}
     * @since 1.0.0
     */

  }, {
    key: "cancelable",
    get: function get() {
      return this._cancelable;
    }

    /**
     * 获取事件的目标对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */

  }, {
    key: "target",
    get: function get() {
      return this._target;
    }

    /**
     * 获取事件的当前对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */

  }, {
    key: "currentTarget",
    get: function get() {
      return this._currentTarget;
    }

    /**
     * 获取事件的当前阶段。
     * @type {EventPhase}
     * @since 1.0.0
     */

  }, {
    key: "eventPhase",
    get: function get() {
      return this._eventPhase;
    }

    /**
     * 指示该事件是否已经取消了默认行为。
     * @type {Boolean}
     * @since 1.0.0
     */

  }, {
    key: "defaultPrevented",
    get: function get() {
      return this._defaultPrevented;
    }
  }]);

  return Event;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IEventDispatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * 定义所有具备事件派发功能对象的接口。
 * @interface
 * @since 1.0.0
 */
var IEventDispatcher = function () {
  function IEventDispatcher() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, IEventDispatcher);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(IEventDispatcher, [{
    key: "addEventListener",

    /**
     * 注册一个事件侦听器。
     * @param {String|Symbol} type - 注册的事件类型。
     * @param {Function|IEventListener} handler - 指定事件处理函数或者是一个事件侦听器。
     * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器配置选项。
     * @since 1.0.0
     */
    value: function addEventListener(type, handler, options) {}
  }, {
    key: "removeEventListener",


    /**
     * 移除一个事件侦听器。
     * @param {String|Symbol} type - 移除的事件类型。
     * @param {Function|IEventListener} handler - 指定要移除的事件处理函数或者事件侦听器。
     * @param {Boolean|IEventListenerOptions} [useCapture=false] - 指定是移除捕获阶段(`true`)还是冒泡阶段(`false`)的事件侦听器。
     * @since 1.0.0
     */
    value: function removeEventListener(type, handler, useCapture) {}
  }, {
    key: "hasEventListener",


    /**
     * 检查是否注册了指定类型的事件侦听器。
     * @param {String|Symbol} type - 检查的事件类型。
     * @returns {Boolean} - 如果存在指定类型的侦听器则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    value: function hasEventListener(type) {}
  }, {
    key: "dispatchEvent",


    /**
     * 派发一个事件对象到目标对象的事件流中。
     * @param {Event} event - 指定派发的事件对象。
     * @returns {Boolean} - 如果事件传递到了当前目标对象，并且没有被取消默认行为。则返回 `true`，否则返回 `false`。
     * @since 1.0.0
     */
    value: function dispatchEvent(event) {}
  }]);

  return IEventDispatcher;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IEventListenerOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * 定义侦听器配置选项的接口。
 * @interface
 * @since 1.0.0
 */
var IEventListenerOptions = function () {
  function IEventListenerOptions() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, IEventListenerOptions);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(IEventListenerOptions, [{
    key: "scope",

    /**
     * 获取侦听器的作用域对象。
     * @type {IEventDispatcher}
     * @since 1.0.0
     */
    get: function get() {}
  }, {
    key: "once",


    /**
     * 指示侦听器是否在执行后，自动从派发器中移除。
     * @type {Boolean}
     * @since 1.0.0
     */
    get: function get() {}
  }, {
    key: "useCapture",


    /**
     * 指示侦听器是否在捕获阶段处理事件。
     * @type {Boolean}
     * @since 1.0.0
     */
    get: function get() {}
  }, {
    key: "priority",


    /**
     * 指示侦听器在派发事件时的优先级。
     * @type {Number}
     * @since 1.0.0
     */
    get: function get() {}
  }]);

  return IEventListenerOptions;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPhase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var _class, _temp;

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
/**
 * 定义 {@link EventDispatcher} 派发事件的阶段的常量。
 * @enum {Number}
 * @since 1.0.0
 */
var EventPhase = (_temp = _class = function EventPhase() {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, EventPhase);
}, _class.NONE = 0, _class.CAPTURING_PHASE = 1, _class.AT_TARGET = 2, _class.BUBBLING_PHASE = 3, _temp);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IEventListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event__ = __webpack_require__(2);




/**
 * 定义事件侦听器对象的接口。
 * @interface
 * @since 1.0.0
 */

var IEventListener = function () {
  function IEventListener() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, IEventListener);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(IEventListener, [{
    key: "handleEvent",

    /**
     * 处理一个事件对象。
     * @param {Event} event - 指定派发的事件对象。
     * @since 1.0.0
     */
    value: function handleEvent(event) {}
  }]);

  return IEventListener;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IEventListener__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IEventListenerOptions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EventListenerOptions__ = __webpack_require__(8);


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





/**
 * 定义 {@link EventDispatcher} 的事件侦听器对象。
 * @implements {IEventListener}
 * @since 1.0.0
 */

var EventListener /*< implement IEventListener >*/ = function () {
  /**
   * 创建一个侦听器对象。
   * 
   * @param {Function|IEventListener} handler - 指定事件处理函数或者是一个侦听器。
   * @param {Boolean|IEventListenerOptions} [options=false] - 指定侦听器的配置选项。
   * @since 1.0.0
   */
  function EventListener(handler) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, EventListener);

    /**
     * @type {Function|IEventListener}
     */
    this._handler = handler;

    /**
     * @type {EventListenerOptions}
     */
    this._options = new __WEBPACK_IMPORTED_MODULE_5__EventListenerOptions__["a" /* default */]().initWithParams(options);
  }

  /**
   * 获取侦听器的处理函数。
   * @type {Function|IEventListener}
   * @since 1.0.0
   */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(EventListener, [{
    key: "handleEvent",


    /**
     * 处理一个事件对象。
     * @param {Event} event - 指定派发的事件对象。
     * @since 1.0.0
     */
    value: function handleEvent(event) {
      if (typeof this._handler.handleEvent == "function") {
        this._handler.handleEvent(event);
      } else {
        this._handler.call(this._options.scope || event.currentTarget, event);
      }
    }
  }, {
    key: "handler",
    get: function get() {
      return this._handler;
    }

    /**
     * 获取侦听器的配置选项。
     * @type {EventListenerOptions}
     * @since 1.0.0
     */

  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }]);

  return EventListener;
}();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListenerOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IEventDispatcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IEventListenerOptions__ = __webpack_require__(4);


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



/**
 * 定义侦听器配置选项。
 * @implements {IEventListenerOptions}
 * @see {@link EventListener}
 * @see {@link EventDispatcher}
 * @since 1.0.0
 */

var EventListenerOptions /*< implements IEventListenerOptions >*/ = function () {
  /**
   * 创建一个侦听器选项对象。
   * 
   * @param {IEventDispatcher} [scope=null] - 指定侦听器的作用域对象。
   * @param {Boolean} [once=false] - 指示侦听器是否在执行后，自动从派发器中移除。
   * @param {Boolean} [useCapture=false] - 指示侦听器是否在捕获阶段处理事件。
   * @param {Number} [priority=0] - 指示侦听器在派发事件时的优先级（事件派发时会优先执行高优先级的侦听器）。
   * @since 1.0.0
   */
  function EventListenerOptions() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, EventListenerOptions);

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


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(EventListenerOptions, [{
    key: "initWithParams",


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
    value: function initWithParams() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (typeof options == "boolean") {
        this._useCapture = options;
      } else {
        if (options.scope !== void 0) {
          this._scope = options.scope;
        }
        if (options.once !== void 0) {
          this._once = options.once;
        }
        if (options.useCapture !== void 0) {
          this._useCapture = options.useCapture;
        }
        if (options.priority !== void 0) {
          this._priority = options.priority;
        }
      }

      return this;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    }

    /**
     * 指示侦听器是否在执行后，自动从派发器中移除。
     * @type {Boolean}
     * @since 1.0.0
     */

  }, {
    key: "once",
    get: function get() {
      return this._once;
    }

    /**
     * 指示侦听器是否在捕获阶段处理事件。
     * @type {Boolean}
     * @since 1.0.0
     */

  }, {
    key: "useCapture",
    get: function get() {
      return this._useCapture;
    }

    /**
     * 指示侦听器在派发事件时的优先级。
     * @type {Number}
     * @since 1.0.0
     */

  }, {
    key: "priority",
    get: function get() {
      return this._priority;
    }
  }]);

  return EventListenerOptions;
}();



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Event__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_CustomEvent__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_CustomEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_EventDispatcher__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return __WEBPACK_IMPORTED_MODULE_2__src_EventDispatcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_EventListener__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return __WEBPACK_IMPORTED_MODULE_3__src_EventListener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_EventListenerOptions__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerOptions", function() { return __WEBPACK_IMPORTED_MODULE_4__src_EventListenerOptions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_EventPhase__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventPhase", function() { return __WEBPACK_IMPORTED_MODULE_5__src_EventPhase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_IEventDispatcher__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IEventDispatcher", function() { return __WEBPACK_IMPORTED_MODULE_6__src_IEventDispatcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_IEventListener__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IEventListener", function() { return __WEBPACK_IMPORTED_MODULE_7__src_IEventListener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_IEventListenerOptions__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IEventListenerOptions", function() { return __WEBPACK_IMPORTED_MODULE_8__src_IEventListenerOptions__["a"]; });










/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Event__ = __webpack_require__(2);






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


/**
 * 定义携带自定义数据的事件对象。
 * @see {@link Event}
 * @since 1.0.9
 */

var CustomEvent = function (_Event) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CustomEvent, _Event);

  /**
   * 创建一个支持自定义数据的事件对象。
   * 
   * @param {String|Symbol} type - 事件类型。
   * @param {any} [data=null] - 指定附加到事件对象的数据。
   * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
   * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
   * @since 1.0.9
   */
  function CustomEvent(type) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CustomEvent);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CustomEvent.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CustomEvent)).call(this, type, bubbles, cancelable));

    _this._data = data;
    return _this;
  }

  /**
   * 重置事件状态（允许外部复用事件对象）。
   * 
   * @param {String|Symbol} type - 事件类型。
   * @param {any} [data=null] - 指定附加到事件对象的数据。
   * @param {Boolean} [bubbles=false] - 指示该事件是否参与冒泡行为。
   * @param {Boolean} [cancelable=true] - 指示该事件是否可以取消默认行为。
   * @returns {this}
   * @since 1.0.11
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CustomEvent, [{
    key: "reset",
    value: function reset(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(CustomEvent.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CustomEvent.prototype), "reset", this).call(this, type, bubbles, cancelable);
      this._data = data;
      return this;
    }

    /**
     * 获取事件对象的自定义数据。
     * @type {any}
     * @since 1.0.9
     */

  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
  }]);

  return CustomEvent;
}(__WEBPACK_IMPORTED_MODULE_6__Event__["a" /* default */]);



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/get");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDispatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IEventDispatcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IEventListener__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IEventListenerOptions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EventPhase__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EventListener__ = __webpack_require__(7);



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







/**
 * 定义所有具备事件派发功能对象的基类。
 * @implements {IEventDispatcher}
 * @since 1.0.0
 */

var EventDispatcher /*< implements IEventDispatcher >*/ = function () {
    /**
     * 创建一个事件派发器。
     * @param {IEventDispatcher} [target=null] - 指定派发器的代理目标对象。
     * @since 1.0.0
     */
    function EventDispatcher() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, EventDispatcher);

        /**
         * @type {IEventDispatcher}
         */
        this._targetDispatcher = target || this;

        /**
         * @type { {[type:String|Symbol]:Array<EventListener>} }
         */
        this._listenerRegister = {};

        /**
         * @type { {type:String|Symbol}: Boolean }
         */
        this._listenerLockers = {};

        /** 事件代理 */
        if (this !== this._targetDispatcher) {
            if (this._targetDispatcher.hasEventListener || this._targetDispatcher.addEventListener || this._targetDispatcher.removeEventListener || this._targetDispatcher.dispatchEvent) {
                throw new TypeError("无法为目标对象创建代理，因为其自身已经实现了一套事件系统。");
            }

            this._targetDispatcher.addEventListener = this.addEventListener.bind(this);
            this._targetDispatcher.removeEventListener = this.removeEventListener.bind(this);
            this._targetDispatcher.hasEventListener = this.hasEventListener.bind(this);
            this._targetDispatcher.dispatchEvent = this.dispatchEvent.bind(this);
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


    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(EventDispatcher, [{
        key: "addEventListener",
        value: function addEventListener(type, handler) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!handler) {
                throw new TypeError("handler 必须为事件处理函数(function)或者是事件侦听器(IEventListener)。");
            }

            var listener = new __WEBPACK_IMPORTED_MODULE_8__EventListener__["a" /* default */](handler, options);

            /**
             * 在事件派发过程中修改侦听器列表会导致派发顺序错误，因此这里需要拷贝侦听器列表的副本。
             * 
             * @example
             * const dispatcher = new EventDispatcher();
             * dispatcher.addEventListener("custom", () => { // 如果不锁定侦听器列表的化，这里将产生一个死循环。
             *     console.log(1}; 
             *     dispatcher.addEventListener("custom", () => {}, { "priority": 1 });
             * });
             * dispatcher.dispatchEvent(new Event("custom", false, false));
             */
            if (this._listenerLockers[type]) {
                this._listenerLockers[type] = false;
                this._listenerRegister[type] = this._listenerRegister[type].slice(0);
            }

            /// 移除重复的事件侦听器。
            this.removeEventListener(type, handler, listener.options.useCapture);

            /// 没有为 type 类型的事件注册侦听器。
            if (!this.hasEventListener(type)) {
                this._listenerRegister[type] = [listener];
                return;
            }

            /// 为 type 类型已经注册的侦听器列表。
            var items = this._listenerRegister[type];

            /**
             * 一般情况下，我们注册的侦听器的优先级都是默认的 0。因此这里可以先对比插入的侦听器的优先级是否为最低的优先级。
             * 如果是则直接放入列表末尾。从而减少为插入侦听器而遍历列表的次数。
             */
            if (items[items.length - 1].options.priority >= listener.options.priority) {
                items.push(listener);
                return;
            }

            /**
             * 按照侦听器注册的顺序以及侦听器优先级的大小插入列表。
             * - 1, 优先越高的侦听器放到列表的前面。
             * - 2, 相同优先级的情况，先注册的侦听器放到列表的前面。
             */
            var insertAt = items.length - 1;
            while (insertAt >= 0 && items[insertAt].options.priority < listener.options.priority) {
                --insertAt;
            }

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

    }, {
        key: "removeEventListener",
        value: function removeEventListener(type, handler) {
            var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!this.hasEventListener(type)) {
                return;
            }

            /**
             * 如果 `useCapture` 是一个 {@link IEventListenerOptions} 对象，则获取 `IEventListenerOptions.useCapture` 的值。
             */
            if (typeof useCapture != "boolean") {
                /** @type {IEventListenerOptions} */
                var options = useCapture;
                useCapture = options.useCapture !== void 0 ? options.useCapture : false;
            }

            /**
             * 在事件派发过程中修改侦听器列表会导致派发顺序错误，因此这里需要拷贝侦听器列表的副本。
             * @see {@link EventDispatcher#addEventListener}
             */
            if (this._listenerLockers[type]) {
                this._listenerLockers[type] = false;
                this._listenerRegister[type] = this._listenerRegister[type].slice(0);
            }

            for (var i = 0, items = this._listenerRegister[type]; i < items.length; ++i) {
                /**
                 * 只有完全相同（使用 === 对比）的侦听器才会被移除。
                 */
                if (handler === items[i].handler && useCapture === items[i].options.useCapture) {
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

    }, {
        key: "hasEventListener",
        value: function hasEventListener(type) {
            return !!this._listenerRegister[type] && this._listenerRegister[type].length >= 1;
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

    }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
            if (typeof event == "string" || (typeof event === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(event)) == "symbol") {
                event = new __WEBPACK_IMPORTED_MODULE_6__Event__["a" /* default */](event);
            }

            /// 该事件对象已经被派发过一次！
            if (event.target || event.eventPhase !== __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].NONE) {
                throw new Error("同一个事件对象不能派发多次！");
            }

            event._target = this._targetDispatcher; // 设置事件目标对象。

            /**
             * 满足以下条件时，直接调度事件至目标阶段：
             * 
             * 1) 事件不参与冒泡行为。
             * 2) 目标对象没有加入显示对象列表。
             */
            if (!event.bubbles || !event.target.parent
            /*< 防止根级别对象循环引用 >*/ || event.target === event.target.parent) {

                event._eventPhase = __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].AT_TARGET;
                event._currentTarget = event.target;

                if (event.currentTarget._dispatchToListeners) {
                    event.currentTarget._dispatchToListeners(event);
                }

                event._currentTarget = null; // 事件派发完成后，删除事件对当前目标的引用。
                return !event.defaultPrevented;
            }

            /**
             * 查找事件传递路径。
             */
            var target = event.target;
            var path = [target];

            while (target.parent && target !== target.parent) {
                path.push(target = target.parent);
            }

            /**
             * 捕获阶段。
             */
            event._eventPhase = __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].CAPTURING_PHASE;

            for (var i = path.length - 1; i >= 1 && !event._stopPropagation; --i) {
                event._currentTarget = path[i];

                if (event.currentTarget._dispatchToListeners) {
                    event.currentTarget._dispatchToListeners(event);
                }
            }

            if (event._stopPropagation) {
                // 事件在捕获阶段被中断。
                event._currentTarget = null;
                return false;
            }

            /**
             * 目标阶段。
             */
            event._eventPhase = __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].AT_TARGET;
            event._currentTarget = path[0];

            if (event.currentTarget._dispatchToListeners) {
                event.currentTarget._dispatchToListeners(event);
            }

            if (event._stopPropagation) {
                event._currentTarget = null;
                return !event.defaultPrevented;
            }

            /**
             * 冒泡阶段。
             */
            event._eventPhase = __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].BUBBLING_PHASE;

            for (var _i = 1; _i < path.length && !event._stopPropagation; ++_i) {
                event._currentTarget = path[_i];

                if (event.currentTarget._dispatchToListeners) {
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

    }, {
        key: "_dispatchToListeners",
        value: function _dispatchToListeners(event) {
            if (!this.hasEventListener(event.type)) {
                return;
            }

            /**
             * 锁定侦听器列表。
             */
            this._listenerLockers[event.type] = true;

            /**
             * 执行侦听器
             */
            for (var i = 0, items = this._listenerRegister[event.type]; i < items.length && !event._stopImmediatePropagation; ++i) {
                /** @type {EventListener} */
                var listener = items[i];

                switch (event.eventPhase) {
                    case __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].CAPTURING_PHASE:
                        if (listener.options.useCapture) {
                            listener.handleEvent(event);
                        }
                        break;

                    case __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].AT_TARGET:
                        listener.handleEvent(event);
                        break;

                    case __WEBPACK_IMPORTED_MODULE_7__EventPhase__["a" /* default */].BUBBLING_PHASE:
                        if (!listener.options.useCapture) {
                            listener.handleEvent(event);
                        }
                        break;

                    default:
                        break;
                }

                /**
                 * 自动移除一次性的侦听器。
                 */
                if (listener.options.once) {
                    this.removeEventListener(event.type, listener.handler, listener.options.useCapture);
                }
            }

            /**
             * 解锁侦听器列表。
             */
            this._listenerLockers[event.type] = false;
        }
    }]);

    return EventDispatcher;
}();



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ })
/******/ ]);