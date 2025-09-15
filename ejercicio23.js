// 23. Promedio mayor a 10 
// Elaborar un programa que lea tres números y determine si su promedio es mayor a 
// 10. 
// ● Entrada: 12, 10, 9 
// ● Salida: "El promedio es mayor a 10"

/*
    ENTRADA: numero1(leer) = 0,
             numero2(leer) = 0,
             numero3(leer) = 0,
             promedio(calcular) = 0

    PROCESO: 
        leer numero1
        leer numero2
        leer numero3
        promedio = (numero1 + numero2 + numero3) / 3
        si promedio > 10 entonces
            mensaje = "El promedio es mayor a 10"
        sino
            mensaje = "El promedio es menor a 10"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function promedioMayorA10() {
    let numero1, numero2, numero3, promedio;

    numero1 = parseFloat(prompt('Ingrese numero 1: '));
    numero2 = parseFloat(prompt('Ingrese numero 2: '));
    numero3 = parseFloat(prompt('Ingrese numero 3: '));
    promedio = (numero1 + numero2 + numero3) / 3;

    if (promedio > 10) {
        return 'El promedio es mayor a 10';
    }
    return 'El promedio es menor a 10';
}

console.log(promedioMayorA10());