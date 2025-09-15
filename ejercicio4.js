// 4. Expresión con división entera y multiplicación 
// Se tienen las variables a=12, b=5, c=3. Se pide resolver la expresión: 
// q = (a div b) + (b^2 mod c) * a 
// Entrada: a=12, b=5, c=3 
// Salida esperada: q=22

/*
    ENTRADA: a(asignar)=12,
             b(asignar)=5,
             c(asignar)=3,
             q(calcular)

    PROCESO: q = (a div b) + (b^2 mod c) * a

    SALIDA:  Escribir "El resultado es: ", q
*/

function expresionDivMod() {
    const a = 12;  
    const b = 5;  
    const c = 3;  

    return Math.trunc((a / b) + (b ** 2 % c) * a);
}

console.log(expresionDivMod());