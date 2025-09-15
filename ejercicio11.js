// 11. Precio con descuento e IVA 
// Desarrollar un programa que lea el precio de un producto y calcule el valor final 
// aplicando un descuento del 5% y luego un IVA del 12%. 
// Entrada: 100 
// Salida esperada: 106.4 

/*
    ENTRADA: precio(leer)=0,
             descuento(asignar)=0.05,
             IVA(asignar)=0.12,
             precioConDescuento(calcular)=0,
             precioFinal(calcular)=0

    PROCESO: 
        leer precio
        precioConDescuento = precio - (precio * descuento)
        precioFinal = precioConDescuento + (precioConDescuento * IVA)

    SALIDA:  Escribir "Valor con descuento: ", precioConDescuento
             Escribir "Valor final con IVA 12%: ", precioFinal
*/

const prompt = require("prompt-sync") ();

function precioTotal() {

    let precio = parseFloat(prompt('Ingrese el precio: '));
    const descuento = 0.05;
    const IVA = 0.12;

    let precioConDescuento = precio - (precio * descuento);
    let precioFinal = precioConDescuento + (precioConDescuento * IVA);

    return `Valor con descuento: ${precioConDescuento}
    Valor final con IVA 12%: ${precioFinal}`;
}

console.log(precioTotal());