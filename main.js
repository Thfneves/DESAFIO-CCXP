const ingressos = [];

function addRedBorder(id) {
  Element = document.querySelector("#" + id);
  Element.style.border = "5px solid red";
}
function highlightCard(selector) {
  var Element = document.querySelector(selector);
  Element.classList.toggle("card-hightLight");
}

function checkKeyboardCode() {
  document.addEventListener(
    "keydown",
    (Event) => {
      var name = Event.key;
      var code = Event.code;
      alert("tecla pressionada ${name} \r\n key code: ${code}");
    },
    false
  );
}

function addKeyboardEventListeners() {
  document.addEventListener(
    "keydown",
    (Event) => {
      var ingresso1 = document.getElementById("roxo");
      var ingresso1 = document.getElementById("rosa");
      var ingresso1 = document.getElementById("amarelo");
      var ingresso1 = document.getElementById("verde");

      var code = Event.code;
      if (code == "Digit1") {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }
      if (code == "Digit2") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }
      if (code == "Digit3") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
      }
      if (code == "Digit4") {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
      }
    },
    false
  );
}
// selectCard- É função que deixa o onlick ativo. A função abaixo esta puxando essa informação//
selectCard = (selector) => {
  //element é um nome para a variavel( nome generico)- em sequencia esta usaando queryselector para puxar o selector
  //( ingresso selecionado) que esta sendo puxado pelo selectcard acima
  var element = document.querySelector(selector);
  element.classList.toggle("card-selected");
  // SE ingressos. includes( tras a resposta se existe o objeto no codigo, se existir retorna true),
  //se não pop ira excluir a informação que não existe.

  if (ingressos.includes(selector)) ingressos.pop(selector);
  //se nao push( ira adcionar)
  else ingressos.push(selector);
};
showSelectedCards = () => {
  if (ingressos.lenght > 0) alert("ingressos Selecionados:" + ingressos);
};

addKeyboardEventListeners();
