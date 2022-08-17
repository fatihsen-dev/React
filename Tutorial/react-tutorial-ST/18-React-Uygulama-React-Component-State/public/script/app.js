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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);

  var _super = _createSuper(Counter);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "containerStyle", {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    });

    _defineProperty(_assertThisInitialized(_this), "buttonStyle", {
      display: "grid",
      width: "40px",
      height: "30px",
      placeItems: "center",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer",
      userSelect: "none"
    });

    _this.addOne = _this.addOne.bind(_assertThisInitialized(_this));
    _this.minusdOne = _this.minusdOne.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.state = {
      number: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "addOne",
    value: function addOne() {
      this.setState(function (prevState) {
        return {
          number: prevState.number + 1
        };
      });
      console.log(this.state.number);
    }
  }, {
    key: "minusdOne",
    value: function minusdOne() {
      this.setState(function (prevState) {
        return {
          number: prevState.number - 1
        };
      });
      console.log(this.state.number);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        number: 0
      });
      console.log(this.state.number);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: this.containerStyle
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.addOne,
        style: this.buttonStyle
      }, "+1"), /*#__PURE__*/React.createElement("b", {
        style: {
          fontSize: "40px",
          width: "60px"
        }
      }, this.state.number), /*#__PURE__*/React.createElement("button", {
        onClick: this.minusdOne,
        style: this.buttonStyle
      }, "-1")), /*#__PURE__*/React.createElement("button", {
        onClick: this.reset,
        style: {
          padding: "3px 20px",
          cursor: "pointer"
        }
      }, "reset"));
    }
  }]);

  return Counter;
}(React.Component);

var root = document.getElementById("root");
ReactDOM.createRoot(root).render( /*#__PURE__*/React.createElement(Counter, null));
