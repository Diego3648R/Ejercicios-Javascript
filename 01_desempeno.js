const prompt = require("prompt-sync")();

let nombre = prompt("Nombre del alumno: ");
let cal1 = Number(prompt("Calificación 1: "));
let cal2 = Number(prompt("Calificación 2: "));
let cal3 = Number(prompt("Calificación 3: "));

if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
    console.log("Error: debes escribir solo números.");
} else if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
    console.log("Error: las calificaciones deben estar entre 0 y 10.");
} else {
    let promedio = (cal1 + cal2 + cal3) / 3;
    let desempeno;

    if (promedio >= 9) {
        desempeno = "Excelente";
    } else if (promedio >= 8) {
        desempeno = "Bueno";
    } else if (promedio >= 7) {
        desempeno = "Satisfactorio";
    } else {
        desempeno = "No acreditado";
    }

    console.log("Alumno: " + nombre);
    console.log("Calificación 1: " + cal1);
    console.log("Calificación 2: " + cal2);
    console.log("Calificación 3: " + cal3);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Desempeño: " + desempeno);
}
