function contarCifras() {
    let numero = prompt("Introduce un numero");
    let copiaNumero = numero;
    let cifras = 0;

    while (copiaNumero >= 1) {
        copiaNumero = copiaNumero / 10;
        cifras++;
    }
    console.log("El numero " + numero + " tiene " + cifras)

}

function dibujarTriangulo() {
    let filas = prompt("Introduce un numero de filas");

    for (let i = 1; i <= filas; i++) {
        let espacios = " ".repeat(filas - i);        
        let caracter = "o".repeat(2 * i - 1);  
        console.log(espacios + caracter + espacios);
    }
}

let numeros = [];
let maximo = null;
let minimo = null;
let totalNumeros = 0;   
let contadorNumeros = 0; 

function introducirNumero() {
    let num = prompt("Introduce un número:");
    if (!isNaN(num)) {
        numeros.push(num);
        contadorNumeros++;
        totalNumeros += num;

        if (maximo === null || num > maximo) {
            maximo = num;
        }
        if (minimo === null || num < minimo) {
            minimo = num;
        }

        console.log("Número " + num + " añadido.");
    } else {
        console.error("Número no válido.");
    }
}

function mostrarMaximo() {
    if (contadorNumeros === 0) {
        console.log("No hay números introducidos.");
    } else {
        console.log("Máximo: " + maximo);
    }
}

function mostrarMinimo() {
    if (contadorNumeros === 0) {
        console.log("No hay números introducidos.");
    } else {
        console.log("Mínimo: " + minimo);
    }
}

function calcularMedia() {
    if (contadorNumeros === 0) {
        console.log("No hay números introducidos.");
    } else {
        let media = totalNumeros / contadorNumeros;
        console.log("Media: " + media.toFixed(2));
    }
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Elige una opción:\n" +
            "a. Introducir nuevo número\n" +
            "b. Calcular máximo\n" +
            "c. Calcular mínimo\n" +
            "d. Calcular media\n" +
            "e. Salir"
        );

        switch (opcion.toLowerCase()) {
            case "a":
                introducirNumero();
                break;
            case "b":
                mostrarMaximo();
                break;
            case "c":
                mostrarMinimo();
                break;
            case "d":
                calcularMedia();
                break;
            case "e":
                console.log("Saliendo del programa...");
                break;
            default:
                console.error("Opción no válida.");
        }
    } while (opcion.toLowerCase() !== "e");
}



function cuentaAtras(num){
    if(numm == 0){
        return 0;
        console.log("DESPEGUE")
    }else{
        console.log(num);
        return cuentaAtras(num-1);
    }
}