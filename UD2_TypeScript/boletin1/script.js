//ejercicio 1
function ej1() {
    //no existe el date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " y son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + (fecha.getMinutes() + 1) + ":" + (fecha.getSeconds() + 1));
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + (fecha.getMinutes() - 1) + ":" + (fecha.getSeconds() - 1));
}
//ejercicio 2
function validaForm() {
    console.log("Validando formulario....");
    var expReg = new RegExp("lo_que_sea");
    //Primero nos aseguramos que no es nulo (porque no puede almacenar un nulo en HTMLInputElement)
    if (document.getElementById("email") != null) {
        var mensajeOK = document.createElement("span");
        var email = document.getElementById("email");
        if (email && expReg.test(email.value)) {
            mensajeOK.textContent = ("email INCORRECTO");
        }
        else {
            mensajeOK.textContent = ("email CORRECTO");
        }
    }
}
