// 28. Área y perímetro de círculo válido 
// Leer el radio de un círculo y calcular su área y perímetro únicamente si el radio es 
// mayor a 0. 
// ● Entrada: radio=4 
// ● Salida: Área≈50.27, Perímetro≈25.13

/*
    ENTRADA: radio(leer) = 0,
             area(calcular) = 0,
             perimetro(calcular) = 0

    PROCESO: 
        leer radio
        si radio > 0 entonces
            area = PI * radio^2
            perimetro = 2 * PI * radio
            mensaje = "El área del círculo es: " + area + ", El perímetro del círculo es: " + perimetro
        sino
            mensaje = "El valor ingresado es inválido"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function areaCirculoValido() {
    let radio;
    radio = parseFloat(prompt('Ingrese el radio: '));

    if (radio > 0) {
        return `
        El área del circulo es: ${Math.PI * radio ** 2};
        El perimetro del circulo es: ${2 * Math.PI * radio};
        `
    } else {
        return 'El valor ingresado es invalido';
    }
}

console.log(areaCirculoValido());