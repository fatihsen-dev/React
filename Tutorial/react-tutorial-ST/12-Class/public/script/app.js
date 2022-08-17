"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var root = document.getElementById("root"); //? ES5 - Class

var personES5 = function personES5() {}; // Nesne - object


var pES5 = new personES5();
console.log(pES5); //? ES6 - Class

var PersonES6 = /*#__PURE__*/function () {
  // Her nesne oluşturulduğunda constructor fonksiyonu çalışır
  function PersonES6() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guest";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2022;

    _classCallCheck(this, PersonES6);

    // this diyerek bulunduğumuz classı kastediyoruz
    this.name = name;
    this.age = age;
  } // Yaş hesaplama


  _createClass(PersonES6, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.age;
    } // karşılama

  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name);
    }
  }]);

  return PersonES6;
}(); // Nesne - object
// örnek 1


var pES61 = new PersonES6("Fatih", 23);
console.log(pES61); // örnek 2

var pES62 = new PersonES6("Yusuf", 21);
console.log(pES62.calculateAge()); // örnek 3

var pES63 = new PersonES6("Yusuf");
console.log(pES63.greeting("Hello"));
console.log(pES63.greeting("Good morning")); // Render

ReactDOM.createRoot(root).render( /*#__PURE__*/React.createElement("div", null));
