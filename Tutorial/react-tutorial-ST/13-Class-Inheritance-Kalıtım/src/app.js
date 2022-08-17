const root = document.getElementById("root");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// öğrenci sınıfı oluşturma oluşturma
class Student extends Person {
  constructor(name, age, studentId) {
    // super ana classı temsil eder bulunduğunuz classtan ana classa veri gönderebilirsiniz
    super(name, age);
    // this bulununduğumuz classı temsil eder
    this.studentId = studentId;
  }
  study() {
    console.log("I am learning...");
  }
}
// Öğretmen sınıfı oluşturma oluşturma
class Teacher extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  teach() {
    console.log("I am teaching...");
  }
}

let personLog = new Person("Fatih", 23);
let studentLog = new Student("Yusuf", 21, 1);
let TeacherLog = new Teacher("Murat", 37, "Matematik");
console.log(personLog);
console.log(studentLog);
studentLog.study();
console.log(TeacherLog);
TeacherLog.teach();

// Render
ReactDOM.createRoot(root).render(<div></div>);
