//ejercicio 1
function saludar() {
    var edad = window.prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        console.log("Eres mayor de edad, teniendo " + edad + " años");
    } else {
        console.log("Eres menor de edad, teniendo " + edad + " años");
    }
}

//ejercicio 2
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\usuario\\ tarda 1,23 segundos, algo considerado \"lento\" en la actualidad.");
}

//ejercicio 3
function pintar_ruta_v2() {
    var substring1 = "El acceso a la ruta C:\\usuario\\ tarda 1,23 segundos, algo";
    var substring2 = "considerado \"lento\" en la actualidad.";
    console.log(substring1 + " " + substring2);
}

//ejercicio 4
function mostrar_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2 por 10 elevado a -9 es: " + num);
}

//ejercicio 5
function muestra_n_distintas_bases(num){
    //transformar a binario
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
}