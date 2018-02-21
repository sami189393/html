


// لتغير قيمة للعناصر باحدى طرقتين هما
document.getElementById("btn").value = "next"; // تغير قيمة العنصر
// او
window.txt.value = "hello"; // تغير قيمة العنصر

document.getElementById("btnCreate").innerHTML = "javaScript"; // لان هذه العنصر مختلف يقع بين تاجين value بدل innerHTML كتبنا هذه الخاصية

window.mylink.innerHTML = "Google";
//-----------------------------------

var v1;
var v2 = "hello";
var v3 = true;
var v4 = 55;
var person = {num:1 , name:"ali" , salary:1000}; // object نوعه
  
document.write("<br>");
document.write(v2); // عطني قيمة المتغير

document.write("<br>");
document.write( typeof(v3) ); // عطني نوع المتغير

document.write("<br><br>");
document.write( typeof(person) );
document.write("<br>");
document.write( person.name ); // object عطني قيمة الاسم من متغير ال
document.write("<br>");
document.write( person.salary );



