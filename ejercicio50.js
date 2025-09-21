// 50. Nombres vacíos en arreglo 
// Leer un arreglo de n nombres y mostrar cuántos están vacíos. 
// ● Entrada: ["Ana", "", ""] 
// ● Salida: "2 nombres vacíos"

/*
    ENTRADA:
        numNombres (leer) = 0
        nombres (arreglo) (asignar) = []
        nombresVacios (asignar) = 0
        i (asignar) = 0

    PROCESO:
        leer numNombres
        para i desde 0 hasta numNombres-1 hacer
            leer nombres[i]
            si nombres[i] = "" entonces
                nombresVacios = nombresVacios + 1
            fin si
        fin para

    SALIDA:
        Escribir nombresVacios
*/

const prompt = require("prompt-sync")();

function nombresVaciosArray() {
    const numNombres = parseInt(prompt("Numero de nombres ha ingresar: "));
    let nombres = [];
    let nombresVacios = 0;

    for (let i = 0; i < numNombres; i++) {
        nombres[i] = prompt(`Ingrese el nombre ${i+1}: `);

        if (nombres[i] === ''){
            nombresVacios++;
        }
    }
    console.log(nombresVacios, 'nombres vacios');
}

nombresVaciosArray();