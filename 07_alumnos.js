const prompt = require("prompt-sync")();

let alumnos = [];

for (let i = 1; i <= 5; i++) {
    console.log("--- Alumno " + i + " ---");
    let nombre = prompt("Nombre: ");
    let matricula = prompt("Matrícula: ");
    let carrera = prompt("Carrera: ");
    let promedio = Number(prompt("Promedio general: "));

    while (isNaN(promedio) || promedio < 0 || promedio > 10) {
        console.log("El promedio debe ser un número entre 0 y 10.");
        promedio = Number(prompt("Promedio general: "));
    }

    let alumno = {
        nombre: nombre,
        matricula: matricula,
        carrera: carrera,
        promedio: promedio
    };
    alumnos.push(alumno);
}

console.log("Lista de alumnos");
for (let i = 0; i < alumnos.length; i++) {
    console.log("Nombre: " + alumnos[i].nombre);
    console.log("Matrícula: " + alumnos[i].matricula);
    console.log("Carrera: " + alumnos[i].carrera);
    console.log("Promedio: " + alumnos[i].promedio);
    console.log("");}

let mejor = alumnos[0];
let suma = 0;
let aprobados = 0;

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].promedio > mejor.promedio) {mejor = alumnos[i];}
    suma = suma + alumnos[i].promedio;
    if (alumnos[i].promedio >= 7) {aprobados++;}}

let promedioGrupo = suma / alumnos.length;

console.log("Alumno con el promedio más alto: " + mejor.nombre + " (" + mejor.promedio + ")");
console.log("Promedio general del grupo: " + promedioGrupo.toFixed(2));
console.log("Alumnos con promedio igual o superior a 7: " + aprobados);