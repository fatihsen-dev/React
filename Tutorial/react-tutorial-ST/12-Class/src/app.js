const root = document.getElementById("root");

//? ES5 - Class

const personES5 = function () {};

// Nesne - object
const pES5 = new personES5();
console.log(pES5);

//? ES6 - Class

class PersonES6 {
  // Her nesne oluşturulduğunda constructor fonksiyonu çalışır
  constructor(name = "Guest", age = 2022) {
    // this diyerek bulunduğumuz classı kastediyoruz
    this.name = name;
    this.age = age;
  }
  // Yaş hesaplama
  calculateAge() {
    return new Date().getFullYear() - this.age;
  }
  // karşılama
  greeting(text) {
    return `${text}, My name is ${this.name}`;
  }
}

// Nesne - object
// örnek 1
const pES61 = new PersonES6("Fatih", 23);
console.log(pES61);

// örnek 2
const pES62 = new PersonES6("Yusuf", 21);
console.log(pES62.calculateAge());

// örnek 3
const pES63 = new PersonES6("Yusuf");
console.log(pES63.greeting("Hello"));
console.log(pES63.greeting("Good morning"));

// Render
ReactDOM.createRoot(root).render(<div></div>);
