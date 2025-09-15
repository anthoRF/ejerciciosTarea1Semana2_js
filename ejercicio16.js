// 16. Lista de materias 
// Elaborar un programa que lea los nombres de 5 materias en un arreglo y los muestre 
// en una sola línea separados por comas. 
// Entrada: ["Mate", "Física", "Química", "Historia", "Inglés"] 
// Salida esperada: "Mate, Física, Química, Historia, Inglés"

/*
    ENTRADA: listaMaterias(leer) = ["", "", "", "", ""]

    PROCESO: 
        leer listaMaterias[0],
        leer listaMaterias[1],
        leer listaMaterias[2],
        leer listaMaterias[3],
        leer listaMaterias[4]

    SALIDA:  Escribir listaMaterias
*/

const prompt = require("prompt-sync") ();

function listaDeMateria() {
    
    const listaMaterias = [

    prompt('Ingrese la materia 1: '),
    prompt('Ingrese la materia 2: '),
    prompt('Ingrese la materia 3: '),
    prompt('Ingrese la materia 4: '),
    prompt('Ingrese la materia 5: '),

    ];

    return listaMaterias.join(', ');
}

console.log(listaDeMateria());
