// 32. Descuento al primer precio si es alto 
// Leer un arreglo con 3 precios y aplicar 20% de descuento al primero si es mayor a 
// 200. 
// ● Entrada: [250, 150, 100] 
// ● Salida: [200, 150, 100]

/*
    ENTRADA: precio1(leer) = 0,
             precio2(leer) = 0,
             precio3(leer) = 0

    PROCESO:
        leer precio1, precio2, precio3
        listaPrecios = [precio1, precio2, precio3]
        si listaPrecios[0] > 200 entonces
            listaPrecios[0] = listaPrecios[0] - (listaPrecios[0] * 0.20)
        fin si

    SALIDA: Escribir listaPrecios
*/

const prompt = require("prompt-sync") ();

function preciosDescuento() {
    let precios = [
        parseFloat(prompt('Ingrese el precio 1: ')),
        parseFloat(prompt('Ingrese el precio 2: ')),
        parseFloat(prompt('Ingrese el precio 3: ')),
    ]

    if (precios[0] > 200) {
        precios[0] = precios[0] - (precios[0] * 0.20);
        return 'Precios Finales: ' + precios;
    }

    return 'Precios: ' + precios;

}

console.log(preciosDescuento());