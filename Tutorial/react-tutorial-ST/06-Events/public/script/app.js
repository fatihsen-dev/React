"use strict";

var root = document.getElementById("root"); // JSX

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello world"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem ipsum.")));
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnBlue";
var number = 0;
var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
  id: "btnPlus",
  className: btnOneClassName,
  onClick: function onClick() {
    number++;
    console.log(number);
  }
}, "+1"), /*#__PURE__*/React.createElement("button", {
  id: "btnMinus",
  className: btnMinusClassName,
  onClick: function onClick() {
    number--;
    console.log(number);
  }
}, "-1"));
ReactDOM.render(template2, root);
