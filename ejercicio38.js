// 38. Promedio de varios grupos 
// Leer 5 grupos de 3 números, calcular el promedio y mostrar si es mayor a 10. 
// ● Entrada: [(12,10,9), (5,5,5)] 
// ● Salida: "Promedio=10.3 >10", "Promedio=5 ≤10"

/*
    ENTRADA:
        numero1 (leer) = 0
        numero2 (leer) = 0
        numero3 (leer) = 0
        promedio (asignar) = 0
        resultados (arreglo) (asignar) = []
        i (asignar) = 1

    PROCESO:
        mientras i ≤ 5 hacer
            leer numero1, numero2, numero3
            promedio = (numero1 + numero2 + numero3) / 3
            si promedio > 10 entonces
                resultados[i] = "Promedio=" + promedio + " >10"
            sino
                resultados[i] = "Promedio=" + promedio + " ≤10"
            fin si
            i = i + 1
        fin mientras

    SALIDA:
        Escribir resultados
*/

const prompt = require("prompt-sync")();

function promedioGrupo (){
    let i = 1;

    while (i < 6) {
        console.log(`GRUPO DE NUMEROS: ${i}`);
        const numero1 = parseFloat(prompt('Ingrese el numero 1: '));
        const numero2 = parseFloat(prompt('Ingrese el numero 2: '));
        const numero3 = parseFloat(prompt('Ingrese el numero 3: '));
        
        let promedio = ((numero1 + numero2 + numero3) / 3);

        if (promedio > 10) {
            console.log(` Tu promedio: ${promedio} > 10`)
        } else {
            console.log(`Tu promedio: ${promedio} < 10`)
        }
    i++
    }
}

promedioGrupo();