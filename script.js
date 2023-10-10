const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const lancamento = "29 march 2024";

function countDown() {
  const DataLanc = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (DataLanc - hoje) / 1000;

  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalminutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = formatotempo(finalDias + `D`);
  hora.innerHTML = formatotempo(finalHoras + `H`);
  minuto.innerHTML = formatotempo(finalminutos + `M`);
  segundo.innerHTML = formatotempo(finalSegundos + `S`);
}
function formatotempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);
