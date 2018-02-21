function sayHello() {
  var name = window.txtUser.value; // الاسم يساوي القيمة المدخله من قبل المستخدم
  document.getElementById("lbl_hi").innerHTML = "Hello " + name ;
  //window.lbl_hi.innerHTML= "Hello " + name ;
}

function showUserAndPass() {
    var user = window.txtUser.value; // خزن قيمة اسم المستخدم في متغير
    var pass = window.txtPass.value; // خزن قيمة الباسورد في متغير
    var msg = "<hr/>username is: " + user + "<hr/>password is: " + pass + "<hr/>" ;

    window.lblMsg.innerHTML = msg ;
    //window.lblMsg.innerHTML = "<hr/>username is: " + user + "<hr/>password is: " + pass + "<hr/>";
}
// /////////////////////////////////////////////////////////

function sayHello_2(name, txtbox) {
    window.lbl_2.innerHTML = "Welcome " + name; // استدعاء قيمة الاسم
    txtbox.value = "Done"; // وطباعة في مربع النص القيمة التاليه txtbox استدعاء قيمة
}
