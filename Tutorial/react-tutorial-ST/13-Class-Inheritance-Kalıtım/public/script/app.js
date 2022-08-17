"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var root = document.getElementById("root");

var Person = /*#__PURE__*/_createClass(function Person(name, age) {
  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
}); // öğrenci sınıfı oluşturma oluşturma


var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, studentId) {
    var _this;

    _classCallCheck(this, Student);

    // super ana classı temsil eder bulunduğunuz classtan ana classa veri gönderebilirsiniz
    _this = _super.call(this, name, age); // this bulununduğumuz classı temsil eder

    _this.studentId = studentId;
    return _this;
  }

  _createClass(Student, [{
    key: "study",
    value: function study() {
      console.log("I am learning...");
    }
  }]);

  return Student;
}(Person); // Öğretmen sınıfı oluşturma oluşturma


var Teacher = /*#__PURE__*/function (_Person2) {
  _inherits(Teacher, _Person2);

  var _super2 = _createSuper(Teacher);

  function Teacher(name, age, department) {
    var _this2;

    _classCallCheck(this, Teacher);

    _this2 = _super2.call(this, name, age);
    _this2.department = department;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "teach",
    value: function teach() {
      console.log("I am teaching...");
    }
  }]);

  return Teacher;
}(Person);

var personLog = new Person("Fatih", 23);
var studentLog = new Student("Yusuf", 21, 1);
var TeacherLog = new Teacher("Murat", 37, "Matematik");
console.log(personLog);
console.log(studentLog);
studentLog.study();
console.log(TeacherLog);
TeacherLog.teach(); // Render

ReactDOM.createRoot(root).render( /*#__PURE__*/React.createElement("div", null));
