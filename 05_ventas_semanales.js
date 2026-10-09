const prompt = require("prompt-sync")();

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = [];
let total = 0;

for (let i = 0; i < 7; i++) {
    let venta = Number(prompt("Ventas del día " + dias[i] + ": $"));

    while (isNaN(venta) || venta < 0) {
        console.log("Valor no válido, intenta de nuevo.");
        venta = Number(prompt("Ventas del día " + dias[i] + ": $"));
    }

    ventas.push(venta);
    total = total + venta;}

let promedio = total / 7;
let mayor = ventas[0];
let menor = ventas[0];
let diaMayor = dias[0];
let diaMenor = dias[0];

for (let i = 1; i < 7; i++) {
    if (ventas[i] > mayor) {
        mayor = ventas[i];
        diaMayor = dias[i];
    }
    if (ventas[i] < menor) {
        menor = ventas[i];
        diaMenor = dias[i];
    }
}

console.log("Resumen de la semana");
for (let i = 0; i < 7; i++) {
    console.log(dias[i] + ": $" + ventas[i].toFixed(2));
}
console.log("Total semanal: $" + total.toFixed(2));
console.log("Promedio diario: $" + promedio.toFixed(2));
console.log("Día con mayor venta: " + diaMayor + " ($" + mayor.toFixed(2) + ")");
console.log("Día con menor venta: " + diaMenor + " ($" + menor.toFixed(2) + ")");
