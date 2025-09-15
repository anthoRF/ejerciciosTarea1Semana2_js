// 6. Mensaje de bienvenida 
// Desarrollar un programa que lea el nombre de un estudiante y lo muestre en pantalla 
// acompañado de un mensaje de bienvenida. 
// Entrada: "Ana" 
// Salida esperada: "Bienvenida Ana"

/*
    ENTRADA: nombre(leer)=""

    PROCESO: leer nombre

    SALIDA: Escribir "Bienvenido: ", nombre
*/

const prompt = require("prompt-sync") ();

function mensajeBienvenida() {

    let nombre = prompt ("Nombre: ");
    return "Bienvenido: " + nombre;
}

console.log(mensajeBienvenida());