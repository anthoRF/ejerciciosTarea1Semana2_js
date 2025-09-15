// 19. Aportes de sueldos 
// Elaborar un programa que lea un arreglo con 3 sueldos y calcule la suma de aportes 
// al IESS (9.45%). 
// Entrada: [500, 400, 600] 
// Salida esperada: Total aporte=134.25

/*
    ENTRADA: listaSueldos(leer) = [0, 0, 0],
             totalAportes(calcular) = 0,
             IESS(asignar) = 0.0945

    PROCESO: 
        leer listaSueldos[0]
        leer listaSueldos[1]
        leer listaSueldos[2]
        totalAportes = (listaSueldos[0] + listaSueldos[1] + listaSueldos[2]) * IESS

    SALIDA:  Escribir "El total de aportes al IESS es: ", totalAportes
*/

const prompt = require("prompt-sync") ();

function aportesSueldosIEES() {
    const listaSueldos = [
        parseFloat(prompt('Ingrese el sueldo 1: ')),
        parseFloat(prompt('Ingrese el sueldo 2: ')),
        parseFloat(prompt('Ingrese el sueldo 3: ')),
    ];
    return "El total de aportes al IESS es: " + ((listaSueldos[0] + listaSueldos[1] + listaSueldos[2]) * 0.0945);
}

console.log(aportesSueldosIEES());