// Arreglos (con ciclos) 
// 46. Materias largas 
// Leer un arreglo de n materias y mostrar todas las que tengan más de 5 caracteres. 
// ● Entrada: [“Mate”, “Programación”] 
// ● Salida: "Programación"

/*
    ENTRADA:
        numeroMaterias (leer) = 0
        materias (arreglo) (asignar) = []
        materiasLargas (arreglo) (asignar) = []
        i (asignar) = 0

    PROCESO:
        leer numeroMaterias
        para i desde 0 hasta numeroMaterias-1 hacer
            leer materias[i]
        fin para

        para i desde 0 hasta longitud(materias)-1 hacer
            si longitud(materias[i]) > 5 entonces
                agregar materias[i] a materiasLargas
            fin si
        fin para

    SALIDA:
        Escribir materiasLargas
*/

const prompt = require("prompt-sync")();

function materiasLargas(){
    const numeroMaterias = parseInt(prompt('Numero de materias ha ingresar: '));
    let materias = [];

    for (let i = 0; i < numeroMaterias; i++){
        materias[i] = (prompt(`Ingrese la materia ${i+1}: `));
    }

    console.log('Materias de +5 caracteres:')

    for (let i = 0; i < materias.length; i++) {
        if (materias[i].length > 5) {
            console.log(materias[i]);
        } 
    }
}

materiasLargas();