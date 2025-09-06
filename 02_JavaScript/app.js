var inputCapacitateCilindrica = document.getElementById(
    'capacitate-cilindrica'
);

function calculeazaImpozitAuto(){
    console.log(inputCapacitateCilindrica.value);
}
var paragrafResultat = document.getElementById('rezultat');
function calculeazaImpozitAuto(){





var ImpozitAuto = 0;
var capacitateCilindrica = inputCapacitateCilindrica.value;
if(capacitateCilindrica <= 1600){
    ImpozitAuto = (capacitateCilindrica / 200) *10;
}else if(capacitateCilindrica > 1600 && capacitateCilindrica <= 2000){
    ImpozitTaxaAuto = (capacitateCilindrica / 200) * 28;
}else if(capacitateCilindrica > 2000 && capacitateCilindrica <= 2600){
    ImpozitAuto = (capacitateCilindrica / 200) * 107;
}else if(capacitateCilindrica > 2600 && capacitateCilindrica <= 3000){  
    ImpozitAuto = (capacitateCilindrica / 200) * 215;
}else {
    ImpozitAuto = (capacitateCilindrica / 200) * 434;
}
paragrafResultat.innerText = 'Impozitul auto este ' + ImpozitAuto + ' lei.';

}

