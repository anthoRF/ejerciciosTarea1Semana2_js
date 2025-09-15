// 24. Aplicar IVA solo si precio es válido 
// Leer el precio de un producto y aplicar IVA del 15% únicamente si el precio es mayor 
// a 0. 
// ● Entrada: 200 
// ● Salida: Total=230

/*
    ENTRADA: precio(leer) = 0,
             total(calcular) = 0,
             IVA(asignar) = 0.15

    PROCESO: 
        leer precio
        si precio > 0 entonces
            total = precio + (precio * IVA)
            mensaje = "El valor total con IVA es: " + total
        sino
            mensaje = "El precio ingresado es inválido"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function precioConIva() {
    let precio;

    precio = parseFloat(prompt('Ingrese el precio: '));

    if (precio > 0) {
        return 'El valor total con IVA es: ' + (precio + (precio * 0.15));
    }
    return 'El precio ingresado es inválido';
}

console.log(precioConIva());