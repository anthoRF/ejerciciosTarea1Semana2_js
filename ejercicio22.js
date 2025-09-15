// 22. Número mayor de dos 
// Desarrollar un programa que lea dos números y muestre cuál de ellos es mayor. 
// ● Entrada: 8, 12 
// ● Salida: "El mayor es 12"

/*
    ENTRADA: numero1(leer) = 0,
             numero2(leer) = 0,
             mayor(calcular) = 0

    PROCESO: 
        leer numero1
        leer numero2
        si numero1 > numero2 entonces
            mayor = numero1
        sino
            mayor = numero2
        fin si

    SALIDA: Escribir "El mayor es: ", mayor
*/

const prompt = require("prompt-sync") ();

function numeroMayor() {
    let numero1, numero2;

    numero1 = parseFloat(prompt('Ingrese el numero 1: '));
    numero2 = parseFloat(prompt('Ingrese el numero 2: '));

    if (numero1 > numero2) {
        return 'El numero mayor es: ' + numero1;
    }
    return 'El numero mayor es: ' + numero2;
}

console.log(numeroMayor());