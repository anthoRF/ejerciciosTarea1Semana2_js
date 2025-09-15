// // 47. Descuento a precios mayores a 200 
// // Leer un arreglo con n precios y aplicar 20% de descuento a los que superen 200. 
// // ● Entrada: [250, 150, 300] 
// // ● Salida: [200, 150, 240]

/*
    ENTRADA:
        numPrecios (leer) = 0
        precios (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        leer numPrecios
        para i desde 0 hasta numPrecios-1 hacer
            leer precios[i]
            si precios[i] > 200 entonces
                precios[i] (asignar) = precios[i] - (precios[i] * 0.20)
            fin si
        fin para

    SALIDA:
        Escribir precios
*/

const prompt = require("prompt-sync")();

function descPreciosMayores() {
    const numPrecios = parseInt(prompt('Numero de precios ha ingresar: '));
    let precios = [];

    for (let i = 0; i < numPrecios; i++){
        precios[i] = (parseFloat(prompt(`Ingrese el precio ${i+1}: `)));

        if (precios[i] > 200) {
            precios[i] = precios[i] - (precios[i] * 0.20);
        } 
    }
    console.log('Precios finales: ', precios);
}

descPreciosMayores(); 



// FORMA 2 DE REALIZAR EL EJERCICIO: 

// const prompt = require("prompt-sync")();



// function descPreciosMayores() {
//     const numPrecios = parseInt(prompt('Numero de precios ha ingresar: '));
//     let precios = [];

//     for (let i = 0; i < numPrecios; i++){
//         precios[i] = (parseFloat(prompt(`Ingrese el precio ${i+1}: `)));

//         if (precios[i] > 200) {
//             console.log('Su valor total con descuento es: ', descuento = precios[i] - (precios[i] * 0.20));
//         } else {
//             console.log('Su precio es: ', precios[i]);
//         }
//     }

// }

// descPreciosMayores(); 
