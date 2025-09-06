var inputInaltime = document.getElementById('inaltime');
var inputGreutate = document.getElementById('greutate');
function calculeazaIMC() {
  var inaltime = inputInaltime.value / 100;
    var greutate = inputGreutate.value;
    var imc = greutate / (inaltime * inaltime);
    var paragrafResultat = document.getElementById('output');
    if(imc  < 18.5){
        paragrafResultat.innerText =imc.toFixed(2) + ' Subponderal';
    } else if(imc >= 18.5 && imc < 24.9){
        paragrafResultat.innerText = imc.toFixed(2)+ ' Greutate normala';
    } else if(imc >= 25 && imc < 29.9){
        paragrafResultat.innerText =imc.toFixed(2) + ' Supraponderal';
    } else {
        paragrafResultat.innerText = imc.toFixed(2) +' Obezitate';
    }
}
