// 14. Aporte al IESS 
// Elaborar un programa que lea el sueldo de un empleado y calcule su aporte al IESS 
// (9.45% del sueldo). 
// Entrada: sueldo=500 
// Salida esperada: Aporte=47.25

/*
    ENTRADA: sueldoEmpleado(leer)=0,
             aporte(calcular)=0,
             porcentaje(asignar)=0.0945

    PROCESO: 
        leer sueldoEmpleado
        aporte = sueldoEmpleado * porcentaje

    SALIDA:  Escribir "Su aporte al IESS es: ", aporte
*/

const prompt = require("prompt-sync") ();

function aporteIESS() {
    let sueldoEmpleado;

    sueldoEmpleado = parseFloat(prompt('Ingrese su sueldo: '));

    return 'Su aporte al IESS es: ' + (sueldoEmpleado * 0.0945);
}

console.log(aporteIESS());