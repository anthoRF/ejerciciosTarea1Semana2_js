// 18. Promedio de calificaciones 
// Crear un programa que lea un arreglo con 4 notas y calcule el promedio. 
// Entrada: [8, 9, 7, 6] 
// Salida esperada: 7.5

/*
    ENTRADA: listaNotas(leer) = [0, 0, 0, 0],
             promedio(calcular) = 0

    PROCESO: 
        leer listaNotas[0]
        leer listaNotas[1]
        leer listaNotas[2]
        leer listaNotas[3]
        promedio = (listaNotas[0] + listaNotas[1] + listaNotas[2] + listaNotas[3]) / 4

    SALIDA:  Escribir "El promedio es: ", promedio
*/

const prompt = require("prompt-sync") ();

function promedioDeCalificaciones() {
    const listaNotas = [
        parseFloat(prompt('Ingrese la nota 1: ')),
        parseFloat(prompt('Ingrese la nota 2: ')),
        parseFloat(prompt('Ingrese la nota 3: ')),
        parseFloat(prompt('Ingrese la nota 4: ')),
    ];
    return "El promedio es: " + (listaNotas[0] + listaNotas[1] + listaNotas[2] + listaNotas[3]) / 4;
}

console.log(promedioDeCalificaciones());