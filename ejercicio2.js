// 2. Expresión combinada con potencias y módulo 
// Con los valores x=4, y=3, z=2, calcular la siguiente expresión aritmética: 
// r = (x^3 + y^2) mod z + (x div y) 
// Entrada: x=4, y=3, z=2 
// Salida esperada: r=2

/*
    ENTRADA: x(asignar)=4,
             y(asignar)=3,
             z(asignar)=2,
             r(calcular)

    PROCESO: r=(x^3+y^2) mod z + (x div y)

    SALIDA:  Escribir "El resultado es: ", r
*/

function expresionAritmetica() {
    const x = 4;
    const y = 3;
    const z = 2;
    
    return Math.trunc((x ** 3 + y ** 2) % z + (x / y));
}

console.log(expresionAritmetica());