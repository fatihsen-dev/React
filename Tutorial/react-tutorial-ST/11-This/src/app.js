//! THIS
const user ={
  name:"Fatih",
  email:"fatihydrm@outlook.com",
  city:"Istanbul",
  roles:["admin","customer"],

  // this burda user objesini temsil edel
  getRoles:function (){
    // iç içe this kunlanılamaz kunlanmak isterseniz öncesinde referans vermelisiniz
    // arrow function scope özeliği içermediği için this içi this kunlanabilirsiniz
    let that = this; // this referansı
    this.roles.forEach(function (role){
      console.log(role);
      console.log(that.name)
    })
  }
}
user.getRoles()

// kaç adet argüman göndericeğiniz belli değil ise (arguments) özeliği ile hepsini alabilirsiniz
const addES5 = function (a,b){
  console.log(arguments);
}
addES5(10,20,30,40,50)

// arrow function içerisinde scope özelliği olmadığı için (arguments) özeliği çalışmaz