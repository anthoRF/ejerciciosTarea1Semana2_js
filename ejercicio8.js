// 8. Promedio de tres números 
// Realizar un programa que lea tres números reales y calcule su promedio aritmético. 
// Entrada: 5, 10, 15 
// Salida esperada: Promedio=10

/*
    ENTRADA: numero1(leer)=0,
             numero2(leer)=0,
             numero3(leer)=0,
             promedio(calcular)=0

    PROCESO: 
        leer numero1, numero2, numero3
        promedio = (numero1 + numero2 + numero3) / 3

    SALIDA:  Escribir "El promedio es: ", promedio
*/

const prompt = require("prompt-sync") ();

function promedioAritmetico() {
    let numero1, numero2, numero3;

    numero1 = parseFloat(prompt('Ingrese Numero 1: '));
    numero2 = parseFloat(prompt('Ingrese Numero 2: '));
    numero3 = parseFloat(prompt('Ingrese Numero 3: '));

    return "El promedio es: " + (numero1 + numero2 + numero3) / 3;
}

console.log(promedioAritmetico());
