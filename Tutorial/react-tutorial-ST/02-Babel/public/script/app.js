"use strict";

var root = document.getElementById("root"); //? JSX (JavaScript XML)

var template = /*#__PURE__*/React.createElement("h1", {
  id: "test"
}, "Hello world"); // React
// let template = React.createElement(
//   "h1",
//   {
//     id: "h1Element",
//   },
//   "Hello world"
// );
// ReactDOM

ReactDOM.render(template, root);
