'use strict'
let correcto = ['este', 'texto', 'o', 'concuerda', 'por', 'que', 'esta', 'mal'];
let arrayData = new Array();
let archivoTxt = new XMLHttpRequest();
let RutaArchivo = 'texto.txt';
archivoTxt.open("GET", RutaArchivo, false);
archivoTxt.send(null);

//Ingresando datos del Txt a mi array
var txt = archivoTxt.responseText.split(' ');
for (var i = 0; i < txt.length; i++) {
    arrayData.push(txt[i]);
}

//Visualización del archivo en el array
console.log("Texto antes de acomodar");
arrayData.forEach(function(data) {
    console.log(data);
});

//Acomodo
for (var j = 0; j < arrayData.length; j++) {
    for (var k = 0; k < arrayData.length - 1; k++) {
        if (arrayData[k] === correcto[k]) {
            var aux = arrayData[k];
            arrayData[k] = arrayData[k + 1];
            arrayData[k + 1] = aux;
        }
    }
}
console.log("Despues de acomodar")
arrayData.forEach(function(data) {
    console.log(data);
});