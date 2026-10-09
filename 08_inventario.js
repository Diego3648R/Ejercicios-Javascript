const prompt = require("prompt-sync")();
let inventario = [];

function registrarProducto() {
    let codigo = prompt("Código: ");

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].codigo === codigo) {
            console.log("Ya existe un producto con ese código.");
            return;}}

    let nombre = prompt("Nombre: ");
    let precio = Number(prompt("Precio: $"));
    let cantidad = Number(prompt("Cantidad disponible: "));
    let categoria = prompt("Categoría: ");

    if (isNaN(precio) || precio < 0 || isNaN(cantidad) || cantidad < 0) {
        console.log("Datos no válidos, el producto no se registró.");
        return;}

    let producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria};

    inventario.push(producto);
    console.log("Producto registrado.");}

function mostrarProducto(p) {
    console.log("Código: " + p.codigo);
    console.log("Nombre: " + p.nombre);
    console.log("Precio: $" + p.precio.toFixed(2));
    console.log("Cantidad: " + p.cantidad);
    console.log("Categoría: " + p.categoria);
    console.log("");}

function consultarInventario() {
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return;}
    console.log("Inventario");
    for (let i = 0; i < inventario.length; i++) {
        mostrarProducto(inventario[i]);}}

function buscarProducto() {
    let codigo = prompt("Código a buscar: ");
    let encontrado = false;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].codigo === codigo) {
            mostrarProducto(inventario[i]);
            encontrado = true;}}

    if (encontrado === false) {
        console.log("No se encontró un producto con ese código.");}}

function calcularValorTotal() {
    let total = 0;
    for (let i = 0; i < inventario.length; i++) {
        total = total + (inventario[i].precio * inventario[i].cantidad);}
    console.log("Valor total de las existencias: $" + total.toFixed(2));}

function productosPocoStock() {
    let hay = false;
    console.log("Productos con menos de 5 unidades");
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].cantidad < 5) {
            mostrarProducto(inventario[i]);
            hay = true;}
    }
    if (hay === false) {
        console.log("Ningún producto tiene menos de 5 unidades.");}}

let opcion = "";

while (opcion !== "6") {
    console.log("MENÚ");
    console.log("1. Registrar producto");
    console.log("2. Consultar inventario");
    console.log("3. Buscar producto por código");
    console.log("4. Calcular valor total de existencias");
    console.log("5. Ver productos con poco stock");
    console.log("6. Salir");
    opcion = prompt("Elige una opción: ");

    switch (opcion) {
        case "1":
            registrarProducto();
            break;
        case "2":
            consultarInventario();
            break;
        case "3":
            buscarProducto();
            break;
        case "4":
            calcularValorTotal();
            break;
        case "5":
            productosPocoStock();
            break;
        case "6":
            console.log("Programa terminado.");
            break;
        default:
            console.log("Opción no válida.");
    }
}
