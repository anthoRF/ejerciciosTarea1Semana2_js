// 17. Precios con IVA y descuento 
// Desarrollar un programa que lea un arreglo de 3 precios, calcule el total aplicando 
// IVA del 12% y un descuento del 20%. 
// Entrada: [100, 200, 300] 
// Salida esperada: Total=537.6

/*
    ENTRADA: precios(leer) = [0, 0, 0],
             sumaPrecios(calcular)=0,
             precioDescuento(calcular)=0,
             precioIva(calcular)=0,
             IVA(asignar)=0.12,
             descuento(asignar)=0.20

    PROCESO: 
        leer precios[0]
        leer precios[1]
        leer precios[2]
        sumaPrecios = precios[0] + precios[1] + precios[2]
        precioDescuento = sumaPrecios - (sumaPrecios * descuento)
        precioIva = precioDescuento + (precioDescuento * IVA)

    SALIDA:  Escribir "El precio total con descuento 20% e IVA 12% es: ", precioIva
*/

const prompt = require("prompt-sync") ();

function totalProductos() {
    const precios = [
    parseFloat(prompt('Ingrese el precio 1: ')),
    parseFloat(prompt('Ingrese el precio 2: ')),
    parseFloat(prompt('Ingrese el precio 3: ')),
    ];
    
    let sumaPrecios = precios[0] + precios[1] + precios[2];
    let precioDescuento = sumaPrecios - (sumaPrecios * descuento);
    let precioIva = precioDescuento + (precioDescuento * IVA);

    return 'El precio total con descuento de 5% e IVA 12% es: ' + precioIva;
}

console.log(totalProductos());
