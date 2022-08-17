"use strict";

var root = document.getElementById("root"); //? React
// let template = React.createElement(
//   "h1",
//   {
//     id: "h1Element",
//   },
//   "Hello world"
// );
//? JSX (JavaScript XML)
// Elementler her zaman bir kapsayıcı içerisinde olmalıdır.

var post = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello world"), /*#__PURE__*/React.createElement("p", {
  className: "text"
}, "Lorem ipsum, dolor sit amet consectetur adipisicing."), /*#__PURE__*/React.createElement("small", {
  className: "date"
}, "19/07/2022"));
var product = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "Model: Iphone 13 Pro Max"), /*#__PURE__*/React.createElement("p", {
  id: "product-disc"
}, "A\xE7\u0131klama: Olduk\xE7a kunlan\u0131\u015Fl\u0131 ve g\xFCzel bir telefon."), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Fiyat: 34.499TL")); //? JSX Expressions
// değişkenden veri alma = {name}

var productName = "Iphone 13 Pro Max";
var productDisc = "Oldukça kunlanışlı ve güzel bir telefon.";
var productPrice = 34.499; // objeden veri alma {obj.name}

var productObj = {
  name: "Iphone 13 Pro Max",
  disc: "Oldukça kunlanışlı ve güzel bir telefon.",
  price: 34.499
};

function priceFunc(price) {
  return price + " TL";
}

var product2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "Model: ", productObj.name), /*#__PURE__*/React.createElement("p", {
  id: "product-disc"
}, "A\xE7\u0131klama: ", productObj.disc), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Fiyat: ", priceFunc(productObj.price))); // ReactDOM

ReactDOM.render(product2, root);
