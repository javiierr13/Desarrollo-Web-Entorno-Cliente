//ejercicio 1
function ej1(): void {

    //no existe el date primitivo
    let fecha: Date = new Date();

    console.log("Hoy es: " + fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " y son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());

    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + (fecha.getMinutes() + 1) + ":" + (fecha.getSeconds() + 1));
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + (fecha.getMinutes() - 1) + ":" + (fecha.getSeconds() - 1));

}

//ejercicio 2
function validaForm() {
    console.log("Validando formulario....");
    let expReg: RegExp = new RegExp("lo_que_sea");

    //Primero nos aseguramos que no es nulo (porque no puede almacenar un nulo en HTMLInputElement)
    if (document.getElementById("email") != null) {
        let mensajeOK = document.createElement("span");
        let email: HTMLInputElement | null = document.getElementById("email") as HTMLInputElement | null;

        if (email && expReg.test(email.value)) {

            mensajeOK.textContent= ("email INCORRECTO");

        } else {
            mensajeOK.textContent = ("email CORRECTO");

        }

    }
}


