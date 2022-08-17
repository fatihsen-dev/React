"use strict";

//! THIS
var user = {
  name: "Fatih",
  email: "fatihydrm@outlook.com",
  city: "Istanbul",
  roles: ["admin", "customer"],
  // this burda user objesini temsil edel
  getRoles: function getRoles() {
    // iç içe this kunlanılamaz kunlanmak isterseniz öncesinde referans vermelisiniz
    // arrow function scope özeliği içermediği için this içi this kunlanabilirsiniz
    var that = this; // this referansı

    this.roles.forEach(function (role) {
      console.log(role);
      console.log(that.name);
    });
  }
};
user.getRoles(); // kaç adet argüman göndericeğiniz belli değil ise (arguments) özeliği ile hepsini alabilirsiniz

var addES5 = function addES5(a, b) {
  console.log(arguments);
};

addES5(10, 20, 30, 40, 50); // arrow function içerisinde scope özelliği olmadığı için (arguments) özeliği çalışmaz
