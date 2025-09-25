let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function () {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        console.log(colorAleatorio);
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
};

function calcular_fibonacci() {
    let num = Number(prompt("Introduce un número:"));
    console.log("El valor fib(" + num + ") es " + fibonaci(num));
}

function fibonaci(num) {
    //comprobamos los casos base
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        //aqui esta la llamada recursiva
        return fibonaci(num - 1) + fibonaci(num - 2);
    }
}

function calcular_factorial(isRec) {
    let num = Number(prompt("Introduce un número:"));
    let resultado;
    if (isRec){
        resultado = factorial_recursiva(num);
    } else {
        resultado = factorial_tradicional(num);
    }
    console.log("El valor " + num + "! es " + resultado);
}

function factorial_recursiva(num) {
    // Comprobamos los casos base
    if (num === 1) {
        return 1;
    } else {
        // Aquí está la llamada recursiva
        return num * factorial_recursiva(num - 1);
    }
}

function factorial_tradicional(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function transformar_dias_horas(){
    let numDias = Number(prompt("Introduce un numero de dias"));
    const horas = numDias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    console.log(numDias + " dias son " + horas + " horas");
    console.log(numDias + " dias son " + minutos + " minutos");
    console.log(numDias + " dias son " + segundos + " segundos");

}

function resolver_ecuacion_segundo_grado(){
    let a = Number(prompt("Introduce el valor de a:"));
    let b = Number(prompt("Introduce el valor de b:"));
    let c = Number(prompt("Introduce el valor de c:"));
    let resultado1 = Math.round((-b + Math.sqrt(b*b - 4*a*c)) / (2*a));
    let resultado2 = Math.round((-b - Math.sqrt(b*b - 4*a*c)) / (2*a));
    console.log("La solucion de "+ a + "x^2 + " + b + "x + " + c + " es x1 = " + resultado1 + " y x2 = " + resultado2);
}