"use strict";

var root = document.getElementById("root");
var productObj = {
  name: "Iphone 13 Pro Max",
  disc: "Oldukça kunlanışlı ve güzel bir telefon.",
  price: 34.499,
  types: ["Red", "Blue", "Rose Gold", "White", "Black"]
}; //? Koşullu ifadeler

function getDescription(desc) {
  // productObj.disc var ise bu çalışır
  if (desc) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-disc"
    }, "A\xE7\u0131klama: ", desc);
  } // productObj.disc yok ise bu çalışır
  else {}
}

var product = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "Model: ", productObj.name ? productObj.name : "İsim bulunamadı."), getDescription(productObj.disc), productObj.price > 0 && /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "Fiyat: ", productObj.price, " TL"), /*#__PURE__*/React.createElement("p", {
  className: "types"
}, productObj.types.length > 0 ? "Seçenekler: " + productObj.types.length + " Renk bulunuyor." : "Seçenekler: bulunmuyor")); // ReactDOM

ReactDOM.render(product, root);
