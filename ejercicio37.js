// 37. Mayor de varios pares de números 
// Leer 10 pares de números y mostrar cuál es el mayor en cada caso. 
// ● Entrada: [(5,7), (9,2)] 
// ● Salida: "Mayor=7", "Mayor=9"

/*
    ENTRADA:
        numero1 (leer) = 0
        numero2 (leer) = 0
        resultados (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        mientras i < 10 hacer
            leer numero1, numero2
            si numero1 > numero2 entonces
                resultados[i]  = "Mayor=" + numero1
            sino
                resultados[i]  = "Mayor=" + numero2
            fin si
            i = i + 1
        fin mientras

    SALIDA:
        Escribir resultados
*/

const prompt = require("prompt-sync") ();

function paresMayores () {
    let i = 0;

    while (i < 10) {
        console.log(`Par: ${i + 1}`);
        const numero1 = parseFloat(prompt('Ingrese el numero 1: '));
        const numero2 = parseFloat(prompt('Ingrese el numero 2: '));

        if (numero1 > numero2) {
            console.log('El numero mayor es: ' + numero1);
        } else  {
            console.log('El numero mayor es: ' + numero2);
        }
    i++;
    }
}

paresMayores();