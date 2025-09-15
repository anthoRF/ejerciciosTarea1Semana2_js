// 20. Concatenar nombres 
// Crear un programa que lea un arreglo con 5 nombres y los concatene en una sola 
// cadena de texto. 
// Entrada: ["Ana", "Luis", "María", "Pedro", "Lucía"] 
// Salida esperada: "Ana Luis María Pedro Lucía"

/*
    ENTRADA: listaNombres(leer) = ["", "", "", "", ""],
             nombres(calcular) = ""

    PROCESO: 
        leer listaNombres[0]
        leer listaNombres[1]
        leer listaNombres[2]
        leer listaNombres[3]
        leer listaNombres[4]
        nombres = listaNombres[0] + " " + listaNombres[1] + " " + listaNombres[2] + " " + listaNombres[3] + " " + listaNombres[4]

    SALIDA:  Escribir "Los nombres son: ", nombres
*/


const prompt = require("prompt-sync") ();

function concatenarNombres() {
    const listaNombres = [
        prompt('Ingrese el nombre 1: '),
        prompt('Ingrese el nombre 2: '),
        prompt('Ingrese el nombre 3: '),
        prompt('Ingrese el nombre 4: '),
        prompt('Ingrese el nombre 5: '),
    ];
    return "Los nombres son: " + listaNombres.join(' ');
}

console.log(concatenarNombres());