// 30. Notas y clasificación 
// Leer 4 notas, calcular el promedio y mostrar: 
// ● Promedio < 40 → “Reprueba” 
// ● 40–69 → “Recuperación” 
// ● ≥70 → “Aprueba” 
// ● Entrada: [30, 40, 50, 60] 
// ● Salida: "Recuperación"

// 30. Notas y clasificación 
// Leer 4 notas, calcular el promedio y mostrar:
// Promedio < 40 → “Reprueba”
// 40–69 → “Recuperación”
// ≥70 → “Aprueba”

/*
    ENTRADA: nota1(leer) = 0,
             nota2(leer) = 0,
             nota3(leer) = 0,
             nota4(leer) = 0,
             promedio(calcular) = 0

    PROCESO:  
        leer nota1, nota2, nota3, nota4
        promedio = (nota1 + nota2 + nota3 + nota4) / 4
        si promedio < 40 entonces
            clasificacion = "Reprueba"
        sino si promedio >= 40 y promedio <= 69 entonces
            clasificacion = "Recuperación"
        sino
            clasificacion = "Aprueba"
        fin si

    SALIDA: Escribir "Promedio: ", promedio, "Clasificación: ", clasificacion
*/

const prompt = require("prompt-sync") ();

function calcularPromedio () {
    let nota1, nota2, nota3, nota4, promedioNotas;

    nota1 = parseFloat(prompt('Ingrese la nota 1: '));
    nota2 = parseFloat(prompt('Ingrese la nota 2: '));
    nota3 = parseFloat(prompt('Ingrese la nota 3: '));
    nota4 = parseFloat(prompt('Ingrese la nota 4: '));

    promedioNotas = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log('Tu promedio es: ', promedioNotas); 

    if (promedioNotas < 40) {
        return 'Reprueba';

    } else if ((promedioNotas >= 40) && (promedioNotas <= 69)) {
        return 'Recuperación';

    } else if (promedioNotas >= 70) {
        return 'Aprueba';
    }
};

console.log(calcularPromedio());