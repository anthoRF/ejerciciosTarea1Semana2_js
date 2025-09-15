// 10. Precio con descuento 
// Elaborar un programa que lea el precio de un producto y calcule el valor final con un 
// descuento del 10%. 
// Entrada: 200 
// Salida esperada: Total=180

/*
    ENTRADA: precio(leer)=0,
             precioFinal(calcular)=0,
             descuento(asignar)=0.10

    PROCESO: 
        leer precio
        precioFinal = precio - (precio * descuento)

    SALIDA:  Escribir "El valor total con descuento del 10% es: ", precioFinal
*/

const prompt = require("prompt-sync") ();

function precioConDescuento() {
    let precio;

    precio = parseFloat(prompt('Ingrese el precio: '));

    return "El valor total con descuento del 10% es: " + (precio - (precio * 0.10));
}

console.log(precioConDescuento());