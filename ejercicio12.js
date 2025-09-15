// 12. Área de un triángulo 
// Diseñar un programa que lea la base y la altura de un triángulo y calcule su área. 
// Entrada: base=10, altura=5 
// Salida esperada: Área=25 

/*
    ENTRADA: base(leer)=0,
             altura(leer)=0,
             area(calcular)=0

    PROCESO: 
        leer base, altura
        area = (base * altura) / 2
 
    SALIDA:  Escribir "El área del triángulo es: ", area
*/

const prompt = require("prompt-sync") ();

function areaTriangulo() {
    let base, altura;

    base = parseFloat(prompt('Ingrese la base: '));
    altura = parseFloat(prompt('Ingrese la altura: '));

    return 'El área del triángulo es: ' + (base * altura) / 2;
}

console.log(areaTriangulo());