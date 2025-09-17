// 43. Áreas y perímetros de varios círculos 
// Leer n radios y calcular área/perímetro únicamente si el radio es mayor a 0. 
// ● Entrada: [3, -1] 
// ● Salida: Área≈28.27, “inválido”

/*
    ENTRADA:
        numeroRadios (leer) = 0
        radio (leer) = 0
        resultadosCirculos (asignar) = []
        i (asignar) = 1

    PROCESO:
        leer numeroRadios
        mientras i <= numeroRadios hacer
            leer radio
            si radio > 0 entonces
                area (asignar) = PI * radio^2
                perimetro (asignar) = 2 * PI * radio
                agregar [area, perimetro] a resultadosCirculos
            sino
                agregar "inválido" a resultadosCirculos
            fin si
            i (asignar) = i + 1
        fin mientras

    SALIDA:
        Escribir resultadosCirculos
*/

const prompt = require("prompt-sync") ();

function areaPerimetroCirculo() {
    let i = 1;
    const numeroRadios = parseInt(prompt('Numero de radios ha ingresar: '));

    while (i < numeroRadios + 1) {
        console.log(`Circulo ${i}: `);
        let radio = parseFloat(prompt('Ingrese el radio: '));

        if (radio > 0) {
            console.log('El area del circulo es: ', area = (Math.PI * (radio ** 2)));
            console.log('El perimetro del circulo es: ', perimetro = (2 * Math.PI * radio));
        } else {
            console.log('Invalido');
        }
        i++
    }
}

areaPerimetroCirculo();