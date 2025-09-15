// 29. Sueldo con aporte y subsidio 
// Leer el sueldo de un empleado, calcular el aporte al IESS (9.45%) y asignar subsidio 
// según reglas: 
// ● <450 → $50 
// ● ≥450 → $30 
// ● ≥700 y <1000 → $20 
// ● caso contrario → 0 
// ● Entrada: 430 
// ● Salida: Aporte=40.63, Subsidio=50 

/*
    ENTRADA: sueldo(leer) = 0,
             aporte(calcular) = 0,
             subsidio(asignar) = 0.0945

    PROCESO: 
        leer sueldo
        aporte = sueldo * 0.0945
        si sueldo < 450 entonces
            subsidio = 50
        sino si sueldo >= 450 y sueldo < 700 entonces
            subsidio = 30
        sino si sueldo >= 700 y sueldo < 1000 entonces
            subsidio = 20
        sino
            subsidio = 0
        fin si

    SALIDA: Escribir "Aporte al IESS: ", aporte, "Subsidio: ", subsidio
*/

const prompt = require("prompt-sync") ();

function sueldoConAporteYSubsidio() {
    let sueldoEmpleado, aporteIESS, subsidio;
    sueldoEmpleado = parseFloat(prompt('Ingrese su sueldo: '));
    aporteIESS = sueldoEmpleado * 0.0945;

    if (sueldoEmpleado < 450) {
        return `
        Su aporte al IESS es: ${aporteIESS}
        Su subsidio es: ${subsidio = 50}
        `
    } else if (sueldoEmpleado >= 450) {
        return `
        Su aporte al IESS es: ${aporteIESS}
        Su subsidio es: ${subsidio = 30}
        `
    } else if ((sueldoEmpleado >= 700) && (sueldoEmpleado < 1000)) {
        return `
        Su aporte al IESS es: ${aporteIESS}
        Su subsidio es: ${subsidio = 20}
        `
    } else {
        return `
        Su aporte al IESS es: ${aporteIESS}
        Su subsidio es: ${subsidio = 0}

       `
    }
}

console.log(sueldoConAporteYSubsidio());