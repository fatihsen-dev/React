"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//? component isimleri büyük harf ile başlamalı
//  function örneği
// const Element = function () {
//   return <h1>Hello World</h1>;
// };
// Main conponent
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _super.apply(this, arguments);
  }

  _createClass(TodoApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TodoHeader, null), /*#__PURE__*/React.createElement(TodoList, null), /*#__PURE__*/React.createElement(TodoInput, null));
    }
  }]);

  return TodoApp;
}(React.Component); // components


var TodoHeader = /*#__PURE__*/function (_React$Component2) {
  _inherits(TodoHeader, _React$Component2);

  var _super2 = _createSuper(TodoHeader);

  function TodoHeader() {
    _classCallCheck(this, TodoHeader);

    return _super2.apply(this, arguments);
  }

  _createClass(TodoHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Todo Application"), /*#__PURE__*/React.createElement("div", {
        className: "desc"
      }, "Lorem, ipsum dolor."));
    }
  }]);

  return TodoHeader;
}(React.Component);

var TodoList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoList, _React$Component3);

  var _super3 = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super3.apply(this, arguments);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(TodoItem, null), /*#__PURE__*/React.createElement(TodoItem, null), /*#__PURE__*/React.createElement(TodoItem, null), /*#__PURE__*/React.createElement(TodoItem, null));
    }
  }]);

  return TodoList;
}(React.Component);

var TodoItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(TodoItem, _React$Component4);

  var _super4 = _createSuper(TodoItem);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _super4.apply(this, arguments);
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, "Todo item");
    }
  }]);

  return TodoItem;
}(React.Component);

var TodoInput = /*#__PURE__*/function (_React$Component5) {
  _inherits(TodoInput, _React$Component5);

  var _super5 = _createSuper(TodoInput);

  function TodoInput() {
    _classCallCheck(this, TodoInput);

    return _super5.apply(this, arguments);
  }

  _createClass(TodoInput, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", null, "Clear todo")), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
        type: "text"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Todo")));
    }
  }]);

  return TodoInput;
}(React.Component); // Render


var root = document.getElementById("root");
ReactDOM.createRoot(root).render( /*#__PURE__*/React.createElement(TodoApp, null));
