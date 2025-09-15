// 21. Bienvenida solo si no está vacío 
// Escribir un programa que lea el nombre de un estudiante y muestre “Bienvenido” 
// únicamente si no está vacío. 
// ● Entrada: "Juan" 
// ● Salida: "Bienvenido Juan"

/*
    ENTRADA: nombre(leer) = ""

    PROCESO: 
        leer nombre
        si nombre != "" entonces
            mensaje = "Bienvenido/a " + nombre
        sino
            mensaje = "No ha ingresado un nombre"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function bienvenidaEstudiante() {
    let nombre;
    nombre = prompt('Ingrese su nombre: ');
    if (nombre !== '') {
        return 'Bienvenido/a ' + nombre;
    }
    return 'No ha ingresado un nombre';
}

console.log(bienvenidaEstudiante());