// 35. Último nombre vacío 
// Leer un arreglo con 5 nombres y verificar si el último está vacío. 
// ● Entrada: [“Ana”, “Luis”, “”] 
// ● Salida: "El último está vacío"

/*
    ENTRADA: nombre1(leer)="",
             nombre2(leer)="",
             nombre3(leer)="",
             nombre4(leer)="",
             nombre5(leer)=""

    PROCESO:
        leer nombre1, nombre2, nombre3, nombre4, nombre5
        listaNombres = [nombre1, nombre2, nombre3, nombre4, nombre5]
        si listaNombres[4] == "" entonces
            resultado = "El último está vacío"
        sino
            resultado = "El último no está vacío"
        fin si

    SALIDA: Escribir resultado
*/

const prompt = require("prompt-sync") ();

function nombresArray () {
    const nombres = [
        prompt('Ingrese nombre 1: '),
        prompt('Ingrese nombre 2: '),
        prompt('Ingrese nombre 3: '),
        prompt('Ingrese nombre 4: '),
        prompt('Ingrese nombre 5: '),
    ]
    if (nombres[4] == '') {
        return 'El ultimo esta vacio'
    } else {
        return 'Los nombres son: ' + nombres;
    }
}

console.log(nombresArray());