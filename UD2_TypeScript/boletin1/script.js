//ejercicio 1
function ej1() {
    //no existe el date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " y son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + (fecha.getMinutes() + 1) + ":" + (fecha.getSeconds() + 1));
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + (fecha.getMinutes() - 1) + ":" + (fecha.getSeconds() - 1));
}
//ejercicio 2
function valida_form() {
    var regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    //Aplico la validacion de la expresion regular
    if (regExp.test($inputValue("email"))) {
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok", "El email es valido"); //Aquí escribo
        $writeNode("error", ""); //Aquí escribo tambien (lo que pasa que borra)
    }
    else {
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok", ""); //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion"); //Aqui tambien escribo
    }
}
//ejercicio3
function ej3() {
    var ventanaNueva = window.open("https:www.google.es", "mi ventana");
    ventanaNueva === null || ventanaNueva === void 0 ? void 0 : ventanaNueva.document.write("HOLA");
}
//ejercicio4
function redirigeTo() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Por favor introduzca una URL valida");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
//Helpers (comunes para todo el boletín)
function $inputValue(id) {
    var input = document.getElementById(id); //Lectura
    var result = "";
    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
//Ejemplo de funciones normales y su definición corta (flecha)
function suma1(a, b) {
    var result = a + b;
    return result;
}
var suma2 = function (a, b) { return a + b; };
suma1(2, 3);
suma2(3, 6);
//Uso de funciones predefinidas en JS que hagan uso de funciones flecha: filter,reduce,foreach,some,every
var arrayPrueba = [2, 4, 6, 8, 10];
var arrayMayorCinco1 = [];
for (var i = 0; i < arrayPrueba.length; i++) {
    if (arrayPrueba[i] > 5) {
        arrayMayorCinco1.push(arrayPrueba[i]);
    }
}
//1.-filter
var arrayMayorCinco2 = arrayPrueba.filter(function (data) { return data > 5; });
console.log(arrayMayorCinco1);
console.log(arrayMayorCinco2);
//2.- Map
var arrayDoble1 = [];
for (var i = 0; i < arrayPrueba.length; i++) {
    arrayDoble1.push(arrayPrueba[i] * 2);
}
var arrayDoble2 = arrayPrueba.map(function (data) { return data * 2; });
console.log(arrayDoble1);
console.log(arrayDoble2);
//2.a.- Combo entre filter y map (filtrado y transormación)
var arrayMayorCincoYDoble = arrayPrueba
    .filter(function (data) { return data > 5; })
    .map(function (data) { return data * 2; });
console.log(arrayMayorCincoYDoble);
var total1 = 0;
for (var i = 0; i < arrayPrueba.length; i++) {
    total1 = total1 + arrayPrueba[i];
}
var total2 = arrayPrueba.reduce(function (acc, data) { return acc + data; });
console.log(total1);
console.log(total2);
//3.- Foreach
for (var i = 0; i < arrayPrueba.length; i++) {
    console.log("Este es el elemento " + (i + 1) + ": " + arrayPrueba[i]);
}
arrayPrueba.forEach(function (data, i) { return console.log("Este es el elemento " + (i + 1) + ": " + data); });
//4.- Some
console.log(arrayPrueba.some(function (data) { return data > 8; }));
//5.- Every
console.log(arrayPrueba.every(function (data) { return data > 0; }));
//Definir una función propia donde uno de sus parametros sea una función
function resuelve_operacion(callback, a, b) {
    console.log("Aqui todavia no he calculado la operacion");
    var result = callback(a, b);
    console.log("Aqui ya la he calculado y es: " + result);
    return result;
}
