// 1. Operación con potencias, módulo y división entera 
// En una fórmula matemática se tienen los valores a=3, b=2, c=5. Se pide calcular la 
// expresión: 
// x = (a + b^2) mod c div a 
// Entrada: a=3, b=2, c=5 
// Salida esperada: x=1

/*
    ENTRADA: a(asignar)=3,
             b(asignar)=2,
             c(asignar)=5,
             x(calcular)

    PROCESO: x=(a+b^2) mod c div a

    SALIDA:  Escribir "El resultado es: ", x
*/

function expresionesMath() {
    const a = 3;
    const b = 2;
    const c = 5;

    return Math.trunc((a + b ** 2) % c / a);
}

console.log(expresionesMath());
