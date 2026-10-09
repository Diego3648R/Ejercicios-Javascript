const prompt = require("prompt-sync")();

let usuarios = [
    { usuario: "admin", contrasena: "1234", tipo: "administrador", activo: true },
    { usuario: "maria", contrasena: "abcd", tipo: "empleado", activo: true },
    { usuario: "pedro", contrasena: "5678", tipo: "empleado", activo: false }];

let nombreUsuario = prompt("Usuario: ");
let contrasena = prompt("Contraseña: ");
let tipo = prompt("Tipo de usuario (administrador/empleado): ").toLowerCase();

let encontrado = null;
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].usuario === nombreUsuario) {
        encontrado = usuarios[i];}}

if (encontrado === null) {
    console.log("Acceso rechazado: el usuario no existe.");
} else if (encontrado.contrasena !== contrasena) {
    console.log("Acceso rechazado: la contraseña es incorrecta.");
} else if (encontrado.tipo !== tipo) {
    console.log("Acceso rechazado: el tipo de usuario no coincide.");
} else if (encontrado.activo === false) {
    console.log("Acceso rechazado: el usuario está inactivo.");
} else if (encontrado.tipo === "administrador") {
    console.log("Acceso al panel de administración");
} else {
    console.log("Acceso al sistema de empleados");
}
