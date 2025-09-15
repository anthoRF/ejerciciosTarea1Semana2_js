// 13. Área y perímetro de un círculo 
// Escribir un programa que lea el radio de un círculo y muestre su área y perímetro. 
// Entrada: radio=3 
// Salida esperada: Área≈28.27, Perímetro≈18.85

/*
    ENTRADA: radio(leer)=0,
             area(calcular)=0,
             perimetro(calcular)=0
             PI(asignar)=3.1416

    PROCESO: 
        leer radio
        area = PI * radio^2
        perimetro = 2 * PI * radio

    SALIDA:  Escribir "El área del círculo es: ", area
             Escribir "El perímetro del círculo es: ", perimetro
*/

const prompt = require("prompt-sync") ();

function areaCirculo() {
    let radio;

    radio = parseFloat(prompt('Ingrese el radio: '));

    return `
    El área del circulo es: ${Math.PI * radio ** 2}
    El perimetro del circulo es: ${2 * Math.PI * radio}
    `;
}

console.log(areaCirculo());