// 41. IVA y descuento según precio (varios) 
// Leer n precios. Si el precio >50 aplicar IVA del 15% y descuento del 20%. Caso 
// contrario aplicar solo IVA del 15%. 
// ● Entrada: [40, 60] 
// ● Salida: [46, 58.65] 

// 41. IVA y descuento según precio (varios) 
// Leer n precios. Si el precio >50 aplicar IVA del 15% y descuento del 20%. Caso 
// contrario aplicar solo IVA del 15%. 
// ● Entrada: [40, 60] 
// ● Salida: [46, 58.65]

/*
    ENTRADA: 
        numeroPrecios (leer) = 0
        precio (leer) = 0
        preciosFinales (asignar) = []

    PROCESO:
        leer numeroPrecios
        para i = 1 hasta numeroPrecios hacer
            leer precio
            precioConIva = precio + (precio * 0.15)
            si precio > 50 entonces
                precioConIva = precioConIva - (precioConIva * 0.20)
            fin si
            agregar precioConIva a preciosFinales
        fin para

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
