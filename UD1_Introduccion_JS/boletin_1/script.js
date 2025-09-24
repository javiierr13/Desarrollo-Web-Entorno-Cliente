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
function mostrar_potencia() {
    var num = 2 * Math.pow(10, -9);
    console.log("El valor de 2 por 10 elevado a -9 es: " + num);
}

//ejercicio 5
function muestra_n_distintas_bases(num) {
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
    var numDecimal = num.toString(10);
    console.log("El número " + num + " en decimal es: " + numDecimal);
    var numHexadecimal = num.toString(16);
    console.log("El número " + num + " en hexadecimal es: " + numHexadecimal);
    var numOctal = num.toString(8);
    console.log("El número " + num + " en octal es: " + numOctal);
}

//ejercicio 6
function dividirCero(num) {
    var resultado = num / 0;
    resultado += 23;
    console.log("El resultado de la operación es: " + resultado);
}

//ejercicio 7
function fuerzaNaN(num) {
    var resultado = num / "hola";
    console.log("El resultado de la operación es: " + resultado);
}

//ejercicio 10
function check_ambito_variables() {
    let prueba = 5;
    console.log("La variable prueba tiene como valor: " + prueba);

    {
        let prueba2 = 10;
        console.log("Insisto. La variable prueba tiene como valor: " + prueba + " tambien dentro del bloque anidado.");
        console.log("Ademas, el bloque interior alberga la variable prueba2 que vale " + prueba2);
    }

    console.log("Por ultimo, desde el bloque principal, intento acceder al valor de una variable interna: " + prueba2);

}

//ejercicio 11
function definir_y_mostrar_array() {
    let array = ["Alberto", "Juan", "Sofía"];

    /*for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }*/

    console.table(array);
}

//ejercicio 12
function contar_y_temporizar() {

    let valor = 0;
    let initTime = new Date();

    for (let i = 0; i < 100000; i++) {
        valor += 10;
    }

    let endTime = new Date();
    console.log("El valor es: " + valor);
    console.log("El tiempo transcurrido es: " + ((endTime - initTime) / 1000) + " segundos");
}

//ejercicio 13
function error_sin_valor() {
    console.error("!Error, no se ha encontrado ningun valor");
}

//ejercicio 14 
function confirmar_eliminacion() {
    let confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
    if (confirmacion) {
        console.log("Elemento eliminado.");
    } else {
        console.log("Eliminación cancelada.");
    }
}

//ejercicio 15
function pedir_datos() {
    let seguir = true;

    while (seguir) {
        let nombre = prompt("Introduce su nombre");
        console.log("Hola " + nombre);
        seguir = confirm("desea continuar en el programa?");//confirm devuelve true o false, en valor en la respuesta
        console.log("has decidido continuar? " + seguir);
    }
    console.log("FIN DEL PROGRAMA");
}

//ejercicio 16 
function edad_mayor_numero() {
    let nombre = prompt("Introduce su nombre");
    let edad = prompt("Introduce su edad");
    let ciudad = prompt("Introduce su ciudad");
    let nTelefono = prompt("Introduce su número de teléfono");

    if (edad ** 5 == nTelefono || ciudad === "Mairena del Alcor") {
        console.log("Enhorabuena " + nombre);
    } else {
        console.log("Ni uno ni otro mamia");
    }

    console.log("FIN DEL PROGRAMA");
}

//ejercicio 16 con formulario
function datos_personales() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("direccion").value;
    let nTelefono = document.getElementById("telefono").value;

    if (edad ** 5 == nTelefono || ciudad === "Mairena del Alcor") {
        console.log("Enhorabuena " + nombre);
    } else {
        console.log("Ni uno ni otro mamia");
    }

    console.log("FIN DEL PROGRAMA");
}

//ejercicio 17 Haz un programa que dado un número de entrada cuente sus cifras y las muestre
//por consola
function contar_cifras(numero) {
    let contador = 0;
    numero = Math.abs(prompt("Introduce un número"));
    while (numero >= 1) {
        numero = numero / 10;
        contador++;
    }
    console.log("El número tiene " + contador + " cifras.");
}

//ejercicio 18
function dame_edad() {
    let edad = document.getElementById("edad").value;
    switch (true) {
        case (edad >= 0 && edad <= 16):
            pintar_mensaje("Eres niño.", true);
            break;
        case (edad >= 17 && edad <= 25):
            pintar_mensaje("Eres joven.", true);
            break;
        case (edad >= 26 && edad <= 60):
            pintar_mensaje("Eres adulto.", true);
            break;
        case (edad > 60):
            pintar_mensaje("Eres senior.", true);
            break;
        default:
            pintar_mensaje("ERROR!, edad no válida.", false);
    }

    /*let edad = document.getElementById("edad").value;
    if (edad >= 0 && edad <= 16) {
        console.log("Eres niño.", true);
    } else if (edad >= 17 && edad <= 25) {
        console.log("Eres joven.", true);
    } else if (edad >= 26 && edad <= 60) {
        console.log("Eres adulto.", true);
    } else if (edad > 60) {
        console.log("Eres senior.", true);
    } else {
        console.error("ERROR!, edad no válida.", error);
    }*/
}

function pintar_mensaje(mensaje, isOk) {
    {
        let aviso = document.getElementById("aviso");
        aviso.textContent = mensaje;

        if (isOk) {
            aviso.style.color = "green";
        } else {
            aviso.style.color = "red";
        }
    }
}


//ejercicio 19
function acierta_aleatorio(){
    const aleat = Math.floor((Math.random() * 10) + 1);
    let intento = 0;

    alert("Se ha calculado un numero aleatorio. ¿Eres capaz de acertarlo?");

    do{
        intento ++;
        var valor_intento = Number(prompt("Intento " + intento));
    }while(valor_intento != aleat);

    console.log("Enhorabuena! has acertado. El numero secreto era el " + aleat);
    console.log("Has necesitado " + intento + " intentos");

}

//ejercicio 20
function multiplo() {
    let num = Number(prompt("Introduce un número"));
    let multiplos = 0;
    const max = 100;
    
    for (let i = num + 1; i < max; i++) {
        if (i % num === 0) {
            multiplos++;
            console.log("multiplo encontrado: " + i);
        }
    }
    console.log("Los múltiplos de " + num + " son: " + multiplos);
}