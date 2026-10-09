const prompt = require("prompt-sync")();
let numero = Number(prompt("Escribe un número entero entre 1 y 20: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Error: debes escribir un número entero.");}
     else if (numero < 1 || numero > 20) {
    console.log("Error: el número debe estar entre 1 y 20.");}
     else {
    console.log("Tabla de multiplicar del " + numero);
    for (let i = 1; i <= 12; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));}}