// 44. Sueldos con subsidios 
// Leer n sueldos, calcular aporte IESS (9.45%) y añadir subsidio: $50 si sueldo <450, $20 
// si entre 700 y 999. 
// ● Entrada: [430, 800] 
// ● Salida: (Aporte=40.63+Sub50), (Aporte=75.6+Sub20)

/*
    ENTRADA:
        numeroSueldos (leer) = 0
        sueldo (leer) = 0
        resultadosSueldos (asignar) = []
        i (asignar) = 1

    PROCESO:
        leer numeroSueldos
        mientras i <= numeroSueldos hacer
            leer sueldo
            aporteIESS (asignar) = sueldo * 0.0945
            si sueldo < 450 entonces
                subsidio (asignar) = 50
            sino si sueldo >= 700 y sueldo <= 999 entonces
                subsidio (asignar) = 20
            sino
                subsidio (asignar) = 0
            fin si
            agregar (aporteIESS, subsidio) a resultadosSueldos
            i = i + 1
        fin mientras

    SALIDA:
        Escribir resultadosSueldos
*/

const prompt = require("prompt-sync")();

function sueldosConAporteIESS() {
    let i = 1;
    let subsidio = 0;
    const numeroSueldos = parseInt(prompt('Numero de sueldos ha ingresar: '));

    while (i < numeroSueldos + 1) {
        let sueldo = parseFloat(prompt(`Ingrese el sueldo ${i}: `));
        let aporteIESS = (sueldo * 0.0945);

        if (sueldo < 450) {
            subsidio = 50;
        } else if (sueldo >= 700 && sueldo <= 999) {
            subsidio = 20;
        } else {
            subsidio = 0;
        }
        console.log(`Su aporte al IESS es: ${aporteIESS} + subsidio: $${subsidio}`);
        i++
    }
}

sueldosConAporteIESS();