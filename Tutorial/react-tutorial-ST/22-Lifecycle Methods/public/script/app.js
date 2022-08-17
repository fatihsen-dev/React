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

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.state = {
      items: ["Chicken", "Cow", "Pih", "Dog", "Cat"]
    };
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "addItem",
    value: function addItem(valu) {
      if (valu !== "") {
        if (this.state.items.indexOf(valu) > -1) {
          return "Bu değer zaten Bulunuyor";
        }

        this.setState(function (prevState) {
          return {
            items: prevState.items.concat(valu)
          };
        });
      }
    } // Component oluşturulduğunda çalışan fonksiyon

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem("items");
      var itemsParse = JSON.parse(json);

      if (itemsParse) {
        this.setState({
          items: itemsParse
        });
      }
    } // Component silindiğinde çalışır

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("Component silindi.");
    } // Component güncellendiğinde çalışır

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length !== this.state.items.length) {
        var json = JSON.stringify(this.state.items);
        localStorage.setItem("items", json);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "Todo Application",
        desc: "Lorem, ipsum dolor."
      };
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "2px"
        }
      }, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        desc: app.desc
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(TodoInput, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoList = /*#__PURE__*/function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  var _super2 = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super2.apply(this, arguments);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }
      }, /*#__PURE__*/React.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "4px"
        }
      }, this.props.items.map(function (liText, index) {
        return /*#__PURE__*/React.createElement(TodoItem, {
          deleteItem: _this2.props.deleteItem,
          key: index,
          text: liText
        });
      })), /*#__PURE__*/React.createElement("button", {
        style: {
          padding: "4px 0",
          cursor: "pointer"
        },
        onClick: this.props.clearItems
      }, "Clear"));
    }
  }]);

  return TodoList;
}(React.Component);

var TodoItem = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoItem, _React$Component3);

  var _super3 = _createSuper(TodoItem);

  function TodoItem(props) {
    var _this3;

    _classCallCheck(this, TodoItem);

    _this3 = _super3.call(this, props);
    _this3.deleteItem = _this3.deleteItem.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(TodoItem, [{
    key: "deleteItem",
    value: function deleteItem() {
      this.props.deleteItem(this.props.text);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", {
        style: {
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }
      }, this.props.text, /*#__PURE__*/React.createElement("button", {
        onClick: this.deleteItem,
        style: {
          padding: "0 10px",
          cursor: "pointer"
        }
      }, "X"));
    }
  }]);

  return TodoItem;
}(React.Component);

var TodoInput = /*#__PURE__*/function (_React$Component4) {
  _inherits(TodoInput, _React$Component4);

  var _super4 = _createSuper(TodoInput);

  function TodoInput(props) {
    var _this4;

    _classCallCheck(this, TodoInput);

    _this4 = _super4.call(this, props);
    _this4.submitEvent = _this4.submitEvent.bind(_assertThisInitialized(_this4));
    _this4.state = {
      error: ""
    };
    return _this4;
  }

  _createClass(TodoInput, [{
    key: "submitEvent",
    value: function submitEvent(e) {
      e.preventDefault();
      var textItemValue = e.target.textItem.value.trim();
      var error = this.props.addItem(textItemValue);
      this.setState({
        error: error
      });
      e.target.textItem.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", {
        style: {
          color: "red"
        }
      }, this.state.error), /*#__PURE__*/React.createElement("form", {
        style: {
          width: "100%",
          display: "flex",
          gap: "10px"
        },
        onSubmit: this.submitEvent
      }, /*#__PURE__*/React.createElement("input", {
        style: {
          flex: "1",
          fontSize: "18px"
        },
        type: "text",
        name: "textItem"
      }), /*#__PURE__*/React.createElement("button", {
        style: {
          padding: "0 10px",
          cursor: "pointer"
        },
        type: "submit"
      }, "Add")));
    }
  }]);

  return TodoInput;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component5) {
  _inherits(Header, _React$Component5);

  var _super5 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super5.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("div", null, this.props.desc));
    }
  }]);

  return Header;
}(React.Component);

var root = document.getElementById("root");
ReactDOM.createRoot(root).render( /*#__PURE__*/React.createElement(TodoApp, null));
