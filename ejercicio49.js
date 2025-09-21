// 49. Sueldos bajos en arreglo 
// Leer un arreglo de n sueldos y mostrar cuántos son menores al salario básico (450). 
// ● Entrada: [400, 600, 300] 
// ● Salida: "2 menores al básico"

/*
    ENTRADA:
        numSueldos (leer) = 0
        sueldos (arreglo) (asignar) = []
        sueldosMenores (asignar) = 0
        i (asignar) = 0

    PROCESO:
        leer numSueldos
        para i desde 0 hasta numSueldos-1 hacer
            leer sueldos[i]
            si sueldos[i] < 450 entonces
                sueldosMenores = sueldosMenores + 1
            fin si
        fin para

    SALIDA:
        Escribir sueldosMenores
*/

const prompt = require("prompt-sync")();

function sueldosBajosArray() {
    const numSueldos = parseInt(prompt('Numero de sueldos ha ingresar: '));
    let sueldos = [];
    let sueldosMenores = 0;

    for (let i = 0; i < numSueldos; i++) {
        sueldos[i] = (parseFloat(prompt(`Ingrese el sueldo ${i+1}: `)));

        if (sueldos[i] < 450) {
            sueldosMenores++;
        }
    }
    console.log(sueldosMenores, 'menores al basico');
}
 
sueldosBajosArray();