// 26. IVA y descuento según precio 
// Si el precio de un producto es mayor a 50, aplicar IVA del 15% y descuento del 10%. 
// En caso contrario, aplicar solo IVA del 15%. 
// ● Entrada: 60 
// ● Salida: Total=58.65

/*
    ENTRADA: precio(leer) = 0,
             total(calcular) = 0,
             IVA(asignar) = 0.15,
             descuento(asignar) = 0.10

    PROCESO: 
        leer precio
        si precio > 50 entonces
            total = precio + (precio * IVA)
            total = total - (total * descuento)
            mensaje = "El valor total con IVA 15% y descuento 10% es: " + total
        sino
            total = precio + (precio * IVA)
            mensaje = "El valor total con IVA 15% es: " + total
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function precioFinal() {
    let precio;
    precio = parseFloat(prompt('Ingrese el precio: '));
    if (precio > 50) {
        precioConIva = precio + (precio * 0.15);
        precioConIvaYDescuento = precioConIva - (precioConIva * 0.10);
        return 'El valor total con IVA 15% y descuento 10% es: ' + precioConIvaYDescuento;
    } else {
        return 'El valor total con IVA 15% es: ' + precioConIva;
    }
}

console.log(precioFinal());