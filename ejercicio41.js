// 41. IVA y descuento según precio (varios) 
// Leer n precios. Si el precio >50 aplicar IVA del 15% y descuento del 20%. Caso 
// contrario aplicar solo IVA del 15%. 
// ● Entrada: [40, 60] 
// ● Salida: [46, 58.65] 

/*
    ENTRADA:
        numeroPrecios (leer) = 0
        precios (arreglo) (asignar) = []
        preciosFinales (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        leer numeroPrecios
        mientras i < numeroPrecios hacer
            leer precios[i]
            precioConIva (asignar) = precios[i] + (precios[i] * 0.15)
            si precios[i] > 50 entonces
                preciosFinales[i] (asignar) = precioConIva - (precioConIva * 0.20)
            sino
                preciosFinales[i] (asignar) = precioConIva
            fin si
            i (asignar) = i + 1
        fin mientras

    SALIDA:
        Escribir preciosFinales
*/

const prompt = require("prompt-sync")();

function preciosIvaDescuento() {
    let i = 1;
    const numeroPrecios = parseInt(prompt('Numero de precios ha ingresar: '));

    while (i < numeroPrecios + 1) {
        const precio = parseFloat(prompt(`Ingrese el precio ${i}: `));
        let precioConIva = (precio + (precio * 0.15));

        if (precio > 50) {
            let precioConIvaDescuento = (precioConIva - (precioConIva * 0.20));
            console.log('Su precio con IVA y descuento es: ', precioConIvaDescuento);
        } else {
            console.log('Su precio con IVA es: ', precioConIva)
        }
        i++
    }
}

preciosIvaDescuento();
