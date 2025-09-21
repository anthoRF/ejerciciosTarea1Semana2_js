// 45. Clasificación de estudiantes 
// Leer notas de 5 estudiantes (4 cada uno), calcular el promedio y mostrar si aprueban, 
// reprueban o van a recuperación. 
// ● Entrada: [[60,70,80,90],[30,40,20,50]] 
// ● Salida: Est1=75 Aprueba, Est2=35 Reprueba

/*
    ENTRADA:
        i (asignar) = 1
        nota1 (leer) = 0
        nota2 (leer) = 0
        nota3 (leer) = 0
        nota4 (leer) = 0
        promedio (asignar) = 0
        resultado (asignar) = ""
        resultadosEstudiantes (asignar) = []

    PROCESO:
        mientras i <= 5 hacer
            leer nota1
            leer nota2
            leer nota3
            leer nota4

            promedio (asignar) = (nota1 + nota2 + nota3 + nota4) / 4

            si promedio >= 70 entonces
                resultado (asignar) = "Aprueba"
            sino si promedio >= 40 entonces
                resultado (asignar) = "Recuperación"
            sino
                resultado (asignar) = "Reprueba"
            fin si

            agregar ("Est" + i + "=" + promedio + " " + resultado) a resultadosEstudiantes
            i = i + 1
        fin mientras

    SALIDA:
        Escribir resultadosEstudiantes
*/

const prompt = require("prompt-sync")();

function estudiantesAprobados() {
    let i = 1;

    while (i < 6) {
        console.log(`Estudiante ${i}: `);
        const nota1 = parseFloat(prompt('Ingrese nota 1: '));
        const nota2 = parseFloat(prompt('Ingrese nota 2: '));
        const nota3 = parseFloat(prompt('Ingrese nota 3: '));
        const nota4 = parseFloat(prompt('Ingrese nota 4: '));
        console.log('Su promedio es: ', promedio = (nota1 + nota2 + nota3 + nota4) / 4 );

        if (promedio >= 70) {
            console.log('Usted Aprueba :)');
        } else if ((promedio < 70 && promedio >= 40)){
            console.log('Usted Va Ha Recuperacion');
        } else {
            console.log('Usted Reprueba :(');
        }
        i++
    }
}
estudiantesAprobados();