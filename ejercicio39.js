// 39. Precios con IVA y descuento en lote 
// Leer n precios y aplicar IVA del 15% con un descuento del 5% solo a los que sean 
// mayores a 10. 
// ● Entrada: [8, 20] 
// ● Salida: [9.2, 21.85]

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
            si precios[i] > 10 entonces
                preciosFinales[i] (asignar) = precioConIva - (precioConIva * 0.05)
            sino
                preciosFinales[i] (asignar) = precioConIva
            fin si
            i (asignar) = i + 1
        fin mientras

    SALIDA:
        Escribir preciosFinales
*/  

const prompt = require("prompt-sync") ();

function preciosConIvaDescuento() {
    let i = 1;
    const numeroPrecios = parseInt(prompt('Numero de precios a ingresar: '));

    while (i < (numeroPrecios + 1)) {
        let precio = parseFloat(prompt(`Ingrese el precio ${i}: `));
        let precioConIva = (precio + (precio * 0.15));

        if (precio > 10) {
            let precioConIvaYDescuento = (precioConIva - (precioConIva * 0.05));
            console.log('Su precion total con IVA y descuento es: ', precioConIvaYDescuento);
        } else {
            console.log('Su precio es: ', precioConIva);
        }
        i++
    }
}

preciosConIvaDescuento();