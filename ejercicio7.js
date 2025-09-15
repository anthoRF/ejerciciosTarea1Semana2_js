// 7. Operaciones básicas entre dos números 
// Elaborar un programa que lea dos números enteros e imprima su suma, resta, 
// multiplicación y división. 
// Entrada: 8 y 2 
// Salida esperada: Suma=10, Resta=6, Multiplicación=16, División=4

/*
    ENTRADA: numero1(leer)=0,
             numero2(leer)=0,
             suma(calcular)=0,
             resta(calcular)=0,
             multiplicacion(calcular)=0,
             division(calcular)=0

    PROCESO: 
        leer numero1, numero2
        suma = numero1 + numero2
        resta = numero1 - numero2
        multiplicacion = numero1 * numero2
        division = numero1 / numero2

    SALIDA:  Escribir "La suma es: ", suma
             Escribir "La resta es: ", resta
             Escribir "La multiplicación es: ", multiplicacion
             Escribir "La división es: ", division
*/

const prompt = require("prompt-sync") ();

function operacionesBasicas() {
    let numero1, numero2;

    numero1 = parseInt(prompt('Ingrese Numero 1: '));
    numero2 = parseInt(prompt('Ingrese Numero 2: '));

    return ` 
    La suma de ${numero1} + ${numero2} es: ${numero1 + numero2} 
    La resta de ${numero1} - ${numero2} es: ${numero1 - numero2}
    La multiplicación de ${numero1} x ${numero2} es: ${numero1 * numero2}
    La division de ${numero1} / ${numero2} es: ${numero1 / numero2}
    `

}

console.log(operacionesBasicas());