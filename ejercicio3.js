// 3. Expresión aritmética con suma, potencias y módulo 
// Dadas las variables m=7, n=4, p=2, calcular el valor de: 
// t = (m + n) * (p^2) - (m mod p) 
// Entrada: m=7, n=4, p=2 
// Salida esperada: t=43

/*
    ENTRADA: m(asignar)=7,
             n(asignar)=4,
             p(asignar)=2,
             t(calcular)

    PROCESO: t = (m + n) * (p^2) - (m mod p)

    SALIDA:  Escribir "El resultado es: ", t
*/

function expresionAritmetica() {
    const m = 7;
    const n = 4;
    const p = 2;

    return Math.trunc((m + n) * (p ** 2) - (m % p))
}

console.log(expresionAritmetica());