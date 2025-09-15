// 15. Promedio de notas 
// Diseñar un programa que lea las calificaciones de 4 parciales y calcule el promedio 
// final del estudiante. 
// Entrada: 8, 9, 7, 10 
// Salida esperada: Promedio=8.5


/*
    ENTRADA:  notaP1(leer) = 0, notaP2(leer) = 0, 
              notaP3(leer) = 0, notaP4(leer) = 0
              promedio(calcular)

    PROCESO:  
            leer notaP1, notaP2, notaP3, notaP4
            promedio = (notaP1 + notaP2 + notaP3 + notaP4) / 4


    SALIDA: Escribir "El promedio es: ", promedio
*/


const prompt = require("prompt-sync") ();

function promedioNotas() {
    let notaP1, notaP2, notaP3, notaP4;

    notaP1 = parseFloat(prompt('Ingrese Nota Del Parcial 1: '));
    notaP2 = parseFloat(prompt('Ingrese Nota Del Parcial 2: '));
    notaP3 = parseFloat(prompt('Ingrese Nota Del Parcial 3:  '));
    notaP4 = parseFloat(prompt('Ingrese Nota Del Parcial 4: '));

    return "El promedio es: " + (notaP1 + notaP2 + notaP3 + notaP4) / 4;
}

console.log(promedioNotas());
