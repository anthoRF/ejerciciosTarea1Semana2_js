// 33. Segunda nota aprobada 
// Leer un arreglo con 4 notas y verificar si la segunda es mayor o igual a 7. 
// ● Entrada: [5, 7, 8, 6] 
// ● Salida: "La segunda nota aprueba"

/*
    ENTRADA: nota1(leer) = 0,
             nota2(leer) = 0,
             nota3(leer) = 0,
             nota4(leer) = 0

    PROCESO:
        leer nota1, nota2, nota3, nota4
        listaNotas = [nota1, nota2, nota3, nota4]
        si listaNotas[1] >= 7 entonces
            resultado = "La segunda nota aprueba"
        sino
            resultado = "La segunda nota no aprueba"
        fin si

    SALIDA: Escribir resultado
*/

const prompt = require("prompt-sync") ();

function notaAprobada () {
    const notas = [
        parseFloat(prompt('Ingrese la nota 1: ')),
        parseFloat(prompt('Ingrese la nota 2: ')),
        parseFloat(prompt('Ingrese la nota 3: ')),
        parseFloat(prompt('Ingrese la nota 4: ')),
    ]

    if (notas[1] >= 7) {
        return 'La segunda nota aprueba'
    } else {
        return 'La segunda nota no aprueba'
    }
}

console.log(notaAprobada());