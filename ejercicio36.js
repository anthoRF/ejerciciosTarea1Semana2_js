// 4. Procesos Repetitivos (15 ejercicios) 
// 36. Bienvenida a varios nombres 
// Leer n nombres y mostrar “Bienvenido” únicamente a los que no estén vacíos. 
// ● Entrada: [“Juan”, “”, “Ana”] 
// ● Salida: "Bienvenido Juan", "Bienvenida Ana"

/*
    ENTRADA:
        numNombres (leer) = 0
        nombre (leer) = ""
        resultados (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        leer numNombres
        mientras i < numNombres hacer
            leer nombre
            si nombre ≠ "" entonces
                resultados.agregar("Bienvenido " + nombre)
            fin si
            i (asignar) = i + 1
        fin mientras

    SALIDA:
        Escribir resultados
*/

const prompt = require("prompt-sync") ();

function bienvenidaNombres() {
    let i = 0;
    const numNombres = parseInt(prompt('Numero de nombres ha ingresar: '));

    while (i < numNombres) {
        let nombre = prompt('Ingrese su nombre: ');
        if (nombre !== '') {
            console.log('Bienvenido ', nombre);
        } else {
            console.log('No ingreso ningun nombre');
        }
        i++

    }   
}
bienvenidaNombres();