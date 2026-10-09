const prompt = require("prompt-sync")();
function sumar(a, b) {return a + b;}
function restar(a, b) {return a - b;}
function multiplicar(a, b) {return a * b;}
function dividir(a, b) {return a / b;}

let texto1 = prompt("Primer número: ");
let texto2 = prompt("Segundo número: ");
let operacion = prompt("Operación (suma, resta, multiplicacion, division): ").toLowerCase();

let num1 = Number(texto1);
let num2 = Number(texto2);

if (texto1.trim() === "" || texto2.trim() === "" || isNaN(num1) || isNaN(num2)) {
    console.log("Error: debes escribir valores numéricos.");
} else {
    switch (operacion) {
        case "suma":
            console.log("Resultado: " + sumar(num1, num2));
            break;
        case "resta":
            console.log("Resultado: " + restar(num1, num2));
            break;
        case "multiplicacion":
            console.log("Resultado: " + multiplicar(num1, num2));
            break;
        case "division":
            if (num2 === 0) {
                console.log("Error: no se puede dividir entre cero.");
            } else {
                console.log("Resultado: " + dividir(num1, num2));
            }
            break;
        default:
            console.log("Error: la operación no es válida.");}}