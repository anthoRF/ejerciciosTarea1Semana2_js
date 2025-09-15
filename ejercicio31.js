// Arreglos (condicionales sin ciclos)
// 31. Materia con más de 5 caracteres 
// Leer un arreglo con 5 materias y mostrar si la primera tiene más de 5 caracteres. 
// ● Entrada: [“Mate”, “Física”, “Historia”] 
// ● Salida: "Física tiene más de 5 caracteres" 

/*
    ENTRADA: materia1(leer) = "",
             materia2(leer) = "",
             materia3(leer) = "",
             materia4(leer) = "",
             materia5(leer) = ""

    PROCESO:
        leer materia1, materia2, materia3, materia4, materia5
        listaMaterias = [materia1, materia2, materia3, materia4, materia5]
        si longitud(listaMaterias[0]) > 5 entonces
            mensaje = listaMaterias[0] + " tiene más de 5 caracteres"
        sino
            mensaje = "No cumple la condición"
        fin si

    SALIDA: Escribir mensaje
*/

const prompt = require("prompt-sync") ();

function materiaCaracteres () {
    const materias = [
        prompt('Ingrese la materia 1: '),
        prompt('Ingrese la materia 2: '),
        prompt('Ingrese la materia 3: '),
    ];


    console.log(materias);

    if (materias[0].length > 5) {
        return materias[0] + ' tiene mas de 5 caracteres'
    }    
    return 'Fin';
}

console.log(materiaCaracteres());




