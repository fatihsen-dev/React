"use strict";

var phones = [{
  name: "Iphone 6",
  price: 1500
}, {
  name: "Iphone 7",
  price: 3000
}, {
  name: "Iphone 8",
  price: 4000
}, {
  name: "Iphone X",
  price: 8000
}, {
  name: "Iphone 11",
  price: 14500
}]; //! ARROW FUNCTION
//? ES5 ==============================================

console.log("ES5 KUNLANIMI"); // Kunlanım 1
// let helloES5 = function (){
//   console.log("Hello From ES5")
// }
// Kunlanım 2

function helloES5() {
  console.log("Hello From ES5");
}

helloES5(); // Parametre örnek

var paramES5 = function paramES5(x, y) {
  return x * y;
};

console.log(paramES5(3, 5)); // Obje döndürme

var objES5 = function objES5(id, name) {
  return {
    id: id,
    name: name
  };
};

console.log(objES5(1, "Fatih")); // Map

var mapES5 = phones.map(function (phone) {
  return phone.price;
});
console.log(mapES5); // Filter

var filterES5 = phones.filter(function (phone) {
  return phone.price > 4000;
});
console.log(filterES5); //? ES6 ==============================================

console.log("");
console.log("ES6 KUNLANIMI"); // Kunlanım 1
// let helloES6 = ()=> {
//   console.log("Hello from ES6")
// };
// Kunlanım 2
// Tek satır return olucaksa paranteze gerek yok

var helloES6 = function helloES6() {
  return console.log("Hello From ES6");
};

helloES6(); // Parametre örnek
// let paramES6 = (x,y)=> {
//   return x * y
// };

var paramES6 = function paramES6(x, y) {
  return x * y;
};

console.log(paramES6(3, 5)); // Obje döndürme

var objES6 = function objES6(id, name) {
  return {
    id: id,
    name: name
  };
};

console.log(objES6(2, "Yusuf")); // Map

var mapES6 = phones.map(function (phones) {
  return phones.price;
});
console.log(mapES6); // Filter

var filterES6 = phones.filter(function (phone) {
  return phone.price < 8000;
});
console.log(filterES6);
