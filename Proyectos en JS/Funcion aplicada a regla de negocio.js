//esta función aplica al cumplimiento de una regla definida

function puedeReservar (cantidad) {
    if (cantidad <=2) {
        return true;
    } else {
        return false;
    }
}

// estamos integrando una función que se activa con base a una condicionante
// es decir, si las reservaciones son menores de 2 
// si afirma que se puede reservar, sino, se indica false de que no se puede reservar
// creo que es un primer ejercicio pero se entiende y puede mejorarse


// nota importante: solo esta definida la función pero no arroja resultados
// para eso hay que introducir console.log

if (puedeReservar(2)) {
    console.log("Reserva confirmada");
} else {
    console.log("lo siento, máximo 2 tazas por persona")
}
// en esta parte estamos enlazando la función con una respuesta igual de condicionada, pero en este caso se está indicando
// que si "puedeReservar" = 2 (el 2 es el valor de tazas reservadas, si lo cambias, cambia la respuesta)
// entonces se debe de mandar X mensaje sino, se manda Y 
// y no hay que definir más por que el operado lógico <= ya define el rango de 0 a 2
// pero creo que podemos mejorar o enlazar de mejor manera, condicionandolo directamente a la respuesta de la función en vez de a un número estático
// H1 - creo que el 2 se puede reemplazar por un let que permita controlar el valor

// Ahora una manera más resumida de hacer esta misma función
function Puedereservar(cantidad) {
    return cantidad <=2;
}
// ¿porque hace lo mismo? - es una versión sintetizada por el que el operador
// lógico <= en sí mismo ya marca una condición de que debe de ser menor o igual

//es importante disernir entre dos códigos que hacen los mismo 