// 25. Descuento del 10% a precios altos 
// Leer el precio de un producto y aplicar un 10% de descuento solo si el precio es 
// mayor o igual a 100. 
// ● Entrada: 150 
// ● Salida: Total=135

/*
    ENTRADA: precio(leer) = 0,
             total(calcular) = 0,
             descuento(asignar) = 0.10

    PROCESO: 
        leer precio
        si precio >= 100 entonces
            total = precio - (precio * descuento)
            mensaje = "El valor total con descuento es: " + total
        sino
            mensaje = "El precio ingresado no tiene descuento, el valor total es: " + precio
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function precioConDescuento() {
    let precio;

    precio = parseFloat(prompt('Ingrese el precio: '));
    
    if (precio >= 100) {
        return 'El valor total con descuento es: ' + (precio - (precio * 0.10));
    }
    return 'El precio ingresado no tiene descuento, el valor total es: ' + precio;
}

console.log(precioConDescuento());