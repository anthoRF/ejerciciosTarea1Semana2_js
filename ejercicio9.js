// 9. Precio con IVA 
// Escribir un programa que lea el precio de un producto y calcule el valor final 
// aplicando un IVA del 12%. 
// Entrada: 100 
// Salida esperada: Total=112

/*
    ENTRADA:  precio(leer) = 0,
              precioFinal(calcular) = 0,
              IVA(asignar) = 0.12


    PROCESO:  
            leer precio
            precioFinal = precio + (precio * IVA)


    SALIDA: Escribir "El valor total con IVA 12% es: ", precioFinal
*/

const prompt = require("prompt-sync") ();

function precioConIva() {

    let precio = parseFloat(prompt('Ingrese el precio: '));
    let precioFinal = (precio + (precio * 0.12));

    return "El valor total con IVA 12% es: " + precioFinal;
}

console.log(precioConIva());
