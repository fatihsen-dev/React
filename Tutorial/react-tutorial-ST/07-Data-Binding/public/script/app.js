"use strict";

var root = document.getElementById("root"); // JSX

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello world"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem ipsum.")));
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnBlue";
var number = 0;

function addOne() {
  number++;
  renderApp();
  console.clear();
}

function minusOne() {
  number--;
  renderApp();
  console.clear();
}

function renderApp() {
  var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnPlus",
    className: btnOneClassName,
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnMinus",
    className: btnMinusClassName,
    onClick: minusOne
  }, "-1"));
  ReactDOM.render(template2, root);
}

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Time is: ", new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
  console.clear();
}

tick();
setInterval(tick, 1000); // renderApp()
