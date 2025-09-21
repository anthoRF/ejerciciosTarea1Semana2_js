// 48. Notas aprobadas en arreglo 
// Leer un arreglo con n notas y mostrar cuántas son ≥70. 
// ● Entrada: [50, 80, 90] 
// ● Salida: "2 notas ≥70"

/*
    ENTRADA:
        numNotas (leer) = 0
        notas (arreglo) (asignar) = []
        notasMayores70 (asignar) = 0
        i (asignar) = 0

    PROCESO:
        leer numNotas
        para i desde 0 hasta numNotas-1 hacer
            leer notas[i]
            si notas[i] ≥ 70 entonces
                notasMayores70 = notasMayores70 + 1
            fin si
        fin para

    SALIDA:
        Escribir notasMayores70
*/

const prompt = require("prompt-sync")();

function notasAprobadasArray(){
    const numNotas = parseInt(prompt('Numero de notas ha ingresar: '));
    let notas = [];
    let notasMayores70 = 0;

    for (let i = 0; i < numNotas; i++) {
        notas[i] = parseFloat(prompt(`Ingrese la nota ${i+1}: `));

        if (notas[i] >= 70) {
            notasMayores70++;
        }
    }
    console.log(`${notasMayores70} notas son >= 70`);
}

notasAprobadasArray();