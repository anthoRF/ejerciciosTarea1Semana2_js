// 42. Áreas de varios triángulos 
// Leer 10 triángulos (base y altura) y calcular su área únicamente si ambos valores son 
// positivos. 
// ● Entrada: [(10,5), (8,-2)] 
// ● Salida: 25, “inválido”

/*
    ENTRADA:
        base, altura (leer)
        areasTriangulos (asignar) = []

    PROCESO:
        para i = 1 hasta 10 hacer
            leer base
            leer altura
            si base > 0 y altura > 0 entonces
                area = (base * altura) / 2
                agregar area a areasTriangulos
            sino
                agregar "inválido" a areasTriangulos
            fin si
        fin para

    SALIDA:
        Escribir areasTriangulos
*/

const prompt = require("prompt-sync")();

function areasTriangulos() {
    let i = 1;
    while (i < 11) {
        console.log(`Triangulo ${i}: `);
        const base = parseFloat(prompt('Ingrese la base: '));
        const altura = parseFloat(prompt('Ingrese la altura: '));

        if ((base && altura) > 0) {
            let areaTriangulo = (base * altura) / 2;
            console.log('El area es: ', areaTriangulo);
        } else {
            console.log('Invalido');
        }
        i++
    }
}

areasTriangulos();