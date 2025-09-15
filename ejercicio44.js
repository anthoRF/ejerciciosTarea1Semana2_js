// 44. Sueldos con subsidios 
// Leer n sueldos, calcular aporte IESS (9.45%) y añadir subsidio: $50 si sueldo <450, $20 
// si entre 700 y 999. 
// ● Entrada: [430, 800] 
// ● Salida: (Aporte=40.63+Sub50), (Aporte=75.6+Sub20)

/*
    ENTRADA:
        sueldo (leer)
        resultadosSueldos (asignar) = []

    PROCESO:
        para i = 1 hasta n hacer
            leer sueldo
            aporteIESS = sueldo * 0.0945
            si sueldo < 450 entonces
                subsidio = 50
            sino si sueldo >= 700 y sueldo <= 999 entonces
                subsidio = 20
            sino
                subsidio = 0
            fin si
            agregar [aporteIESS, subsidio] a resultadosSueldos
        fin para

    SALIDA:
        Escribir resultadosSueldos
*/

const prompt = require("prompt-sync")();

function sueldosConAporteIEES() {
    let i = 1;
    const numeroSueldos = parseInt(prompt('Numero de sueldos ha ingresar: '));

    while (i < numeroSueldos + 1) {
        let sueldo = parseFloat(prompt(`Ingrese el sueldo ${i}: `));
        let aporteIESS = (sueldo * 0.0945)

        if (sueldo < 450) {
            console.log(`Su aporte al IEES es: ${aporteIESS} + subsidio: $50`);
        } else if (sueldo >= 700 && sueldo <= 999) {
            console.log(`Su aporte al IEES es: ${aporteIESS} + subsidio: $20`);
        } else {
            console.log(`Su aporte al IEES es: ${aporteIESS}`);
        }
        i++
    }
}

sueldosConAporteIEES();