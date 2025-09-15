// 34. Tercer sueldo menor al básico 
// Leer un arreglo con 3 sueldos y verificar si el tercero es menor al salario básico (450). 
// ● Entrada: [500, 600, 400] 
// ● Salida: "El tercero es menor al básico"

/*
    ENTRADA: sueldo1(leer) = 0,
             sueldo2(leer) = 0,
             sueldo3(leer) = 0

    PROCESO:
        leer sueldo1, sueldo2, sueldo3
        listaSueldos = [sueldo1, sueldo2, sueldo3]
        si listaSueldos[2] < 450 entonces
            resultado = "El tercero es menor al básico"
        sino
            resultado = "El tercero no es menor al básico"
        fin si

    SALIDA: Escribir resultado
*/

const prompt = require("prompt-sync") ();

function salarioMenorAlBasico () {
    const sueldos = [
        prompt('Ingrese el sueldo 1: '),
        prompt('Ingrese el sueldo 2: '),
        prompt('Ingrese el sueldo 3: '),
    ]

    if (sueldos[2] < 450) {
        return 'El tercer sueldo es menor al basico'
    } else {
        return 'Los sueldos son: ' + sueldos;
    }
}

console.log(salarioMenorAlBasico());