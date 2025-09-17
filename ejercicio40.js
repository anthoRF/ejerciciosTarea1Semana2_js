// 40. Descuento del 10% a precios altos 
// Leer n precios y aplicar descuento del 10% a los que cuesten ≥100. 
// ● Entrada: [80, 150] 
// ● Salida: [80, 135] 

/*
    ENTRADA:
        numeroPrecios (leer) = 0
        precio (leer) = 0
        precios (arreglo) (asignar) = []
        preciosFinales (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        leer numeroPrecios
        mientras i < numeroPrecios hacer
            leer precio
            si precio >= 100 entonces
                precioConDescuento (asignar) = precio - (precio * 0.10)
                preciosFinales[i] (asignar) = precioConDescuento
            sino
                preciosFinales[i] (asignar) = precio
            fin si
            i (asignar) = i + 1
        fin mientras

    SALIDA:
        Escribir preciosFinales
*/

const prompt = require("prompt-sync") ();

function descuentoPrecioAlto() {
    let i = 1;
    const numeroPrecios = parseInt(prompt('Numero de precios ha ingresar: '));
    
    while (i < numeroPrecios + 1) {
        let precio = parseFloat(prompt(`Ingrese el precio ${i}: `));
        if (precio >= 100) {
            let precioConDescuento = (precio - (precio * 0.10));
            console.log('Su precio con descuento es: ', precioConDescuento);
        } else {
            console.log('El precio es: ', precio);
        }
    i++
    }
}

descuentoPrecioAlto();