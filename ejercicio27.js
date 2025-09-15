// 27. Área de triángulo válida 
// Leer base y altura de un triángulo y calcular el área únicamente si ambos valores son 
// positivos. 
// ● Entrada: base=10, altura=5 
// ● Salida: Área=25

/*
    ENTRADA: base(leer) = 0,
             altura(leer) = 0,
             area(calcular) = 0

    PROCESO: 
        leer base
        leer altura
        si base > 0 y altura > 0 entonces
            area = (base * altura) / 2
            mensaje = "El área del triángulo es: " + area
        sino
            mensaje = "Los valores ingresados son inválidos"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function areaTrianguloValida() {
    let base, altura;
    
    base = parseFloat(prompt('Ingrese la base: '));
    altura = parseFloat(prompt('Ingrese la altura: '));

    if (base > 0 && altura > 0) {
        return 'El área del triángulo es: ' + (base * altura) / 2;
    } else {
        return 'Los valores ingresados son invalidos';
    }
}

console.log(areaTrianguloValida());