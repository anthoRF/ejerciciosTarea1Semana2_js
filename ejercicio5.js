// 5. Expresión con potencias y operaciones mixtas 
// Dados los valores x=10, y=2, z=3, calcular la expresión: 
// k = (x^2 + y^3) div z + (x mod y) 
// Entrada: x=10, y=2, z=3 
// Salida esperada: k=35

/*
    ENTRADA: x(asignar)=10,
             y(asignar)=2,
             z(asignar)=3,
             k(calcular)=0

    PROCESO: k = (x^2 + y^3) div z + (x mod y)

    SALIDA:  Escribir "El resultado es: ", k
*/

function operacionesMixtas() {
    const x = 10;
    const y = 2;
    const z = 3;

    return Math.trunc((x ** 2 + y ** 3) / z + (x % y));
}

console.log(operacionesMixtas());