function addRedBorder(id) {
  Element = document.querySelector("#" + id);
  Element.style.border = "5px solid red";
}
function highlightCard(selector) {
  var Element = document.querySelector(selector);
  Element.classList.toggle("card-hightLight");
}
