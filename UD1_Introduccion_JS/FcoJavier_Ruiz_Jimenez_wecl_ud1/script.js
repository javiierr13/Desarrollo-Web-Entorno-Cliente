function menu() {
    const maxTiradasExtra = 3;
    let juegoIniciado = false;
    let opcion;
    var nombre = "";
    var edad = "";
    let lanzamientos = 0;
    let puntosTotales = 0;
    let maxPuntos = null;
    let minPuntos = null;
    let tiempoInicio = null;
    
    do {
        opcion = prompt("Elige una opción:\n1. Iniciar Juego \n2. Lanzar Dados \n3. Mostrar estadisticas de juego \n4. Salir");
        switch (opcion) {
            case "1":
                if (juegoIniciado) {
                    console.error("El juego ya ha sido iniciado.");
                } else {
                    juegoIniciado = true;
                    console.log("Juego Iniciado");
                    tiempoInicio = Date.now();

                    nombre = prompt("Introduce tu nombre:");
                    edad = prompt("Introduce tu edad:");
                }
                break;
            case "2":
                if (!juegoIniciado) {
                    console.error("Debes iniciar el juego primero.");
                } else {
                    var tiradasExtra = 0;
                    var sumaTotal = 0;
                    var repetir = true;
                    while (repetir) {
                        var dado1 = Math.floor(Math.random() * 6) + 1;
                        var dado2 = Math.floor(Math.random() * 6) + 1;
                        var suma = dado1 + dado2;
                        sumaTotal += suma;
                        lanzamientos++;
                        console.log("El jugador " + nombre + " ha obtenido: ");
                        console.log("Dado 1: " + dado1);
                        console.log("Dado 2: " + dado2);

                        if (maxPuntos === null || suma > maxPuntos) {
                            maxPuntos = suma;
                        }
                        if (minPuntos === null || suma < minPuntos) {
                            minPuntos = suma;
                        }

                        if (dado1 === dado2) {
                            tiradasExtra++;
                            if (tiradasExtra > maxTiradasExtra) {
                                console.log("Cuarta tirada extra, pierdes el turno, puntuación a cero.");
                                sumaTotal = 0;
                                repetir = false;
                            } else {
                                console.log("Doble, Tirada extra");
                            }
                        } else {
                            repetir = false;
                        }
                    }
                    puntosTotales += sumaTotal;
                    console.log("El jugador " + nombre + " ha obtenido " + sumaTotal + " puntos en esta tirada.");
                }
                break;
            case "3":
                if (!juegoIniciado) {
                    console.error("Debes iniciar el juego primero.");
                } else {
                    console.log("Mostrando estadísticas de juego del jugador " + nombre);
                    console.log("Número de tiradas: " + lanzamientos);
                    if (lanzamientos > 0) {
                        let media = puntosTotales / lanzamientos;
                        console.log("Media de puntos por tirada: " + media);
                        console.log("Valor máximo: " + maxPuntos);
                        console.log("Valor mínimo: " + minPuntos);
                    } else {
                        console.log("No se han realizado tiradas todavía.");
                    }
                }
                break;
            case "4":
                if (!juegoIniciado) {
                    console.error("Ni siquiera has iniciado el juego, payaso.");
                } else {
                    var tiempoFin = Date.now();
                    let segundos = Math.floor((tiempoFin - tiempoInicio) / 1000);
                    console.log("Fin del juego, has jugado " + segundos + " segundos.");
                }
                console.log("Saliendo del juego......");
                break;
            default:
                console.error("Opción no válida.");
        }
    } while (opcion !== "4");
}