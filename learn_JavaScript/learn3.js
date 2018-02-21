function getName() {
  return "hello sami";
}

function getTextBox() {
    return "<input />" ; // اضف مربع نص
}

function big(img) { // كبر الصورة
  img.style.height = 100;
  img.style.width = 100;
}
function small(img) { // صغر الصورة
  img.style.height = 40;
  img.style.width = 40;
}

function o1(img) {
  img.style.opacity = 0.5; // اجعله شفاف
}
function o2(img) {
  img.style.opacity = 1; // الغاء الشفافيه
}

function getXY(e) { // X , Y عملية حساب قيمة الحدث
  var x = e.clientX ; // event.clientX
  var y = e.clientY ; // event.clientY
  window.lbl_XY.innerHTML = "X: " + x + " ; Y: " + y ;
}
