const prompt = require("prompt-sync")();

let nombre = prompt("Nombre del cliente: ");
let monto = Number(prompt("Monto de la compra: $"));
let vip = prompt("¿Es miembro VIP? (si/no): ").toLowerCase();

if (isNaN(monto) || monto < 0) {
    console.log("Error: el monto no es válido.");
} else {
    let porcentaje;

    if (monto < 500) {
        porcentaje = 0;
    } else if (monto < 1000) {
        porcentaje = 5;
    } else if (monto < 3000) {
        porcentaje = 10;
    } else {
        porcentaje = 15;
    }

    let descuento = monto * porcentaje / 100;
    let totalParcial = monto - descuento;
    let descuentoVip = 0;
    if (vip === "si") {
        descuentoVip = totalParcial * 0.05;
    }

    let totalFinal = totalParcial - descuentoVip;
    let descuentoTotal = descuento + descuentoVip;

    console.log("Cliente: " + nombre);
    console.log("Monto de la compra: $" + monto.toFixed(2));
    console.log("Descuento por monto (" + porcentaje + "%): $" + descuento.toFixed(2));
    console.log("Descuento VIP (5%): $" + descuentoVip.toFixed(2));
    console.log("Descuento total aplicado: $" + descuentoTotal.toFixed(2));
    console.log("Total final: $" + totalFinal.toFixed(2));
}
