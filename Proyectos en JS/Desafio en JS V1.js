// En el proyecto "funcion aplicada a regla de negocio" solo se valida una regla de negocio
// Se valida la regla de "confirmar reservación de tazas" - tomando de base que se puede hacer un máximo de 2 tazas
// Regla faltante - Tienda tiene un max. de 50 tazas al día entre todos los clientes
// Desafío - ¿como podemos hacer que se validen las dos reglas? 
// Pista - Necesitas más de un parámetro 

function puedeReservarTazas (cantidadPorPersona) {
    if (cantidadPorPersona <=2) {
        return true;
    } else {
        return false;
    }
}

function maxTazasaReservar (tazas) {
    if (tazas <=50) {
        return true;
    } else {
        return false;
    }
}

// H1 - creo que se puede consolidar todo en una única función - sí se puede
// H0 - Debe de funcionar aun que sean dos funciones separadas - sí funciona

let cantidadPorPersona = 1
let tazas = 49 

if (puedeReservarTazas(cantidadPorPersona) && maxTazasaReservar(tazas)) {
    console.log ("Reserva confirmada");
} else { 
    console.log("lo siento, ya no hay cupo")
}

// ¿Que cambie tomando de referencia el ejercicio? - el ejercicio limitaba a cambiar manualmente 
// un valor dentro del if, lo cual considero que no era muy realista y era más tedioso
// por ende, opte por generar dos variables let que puedan ser modificadas manualmente y el resultado se ajusta

// versión sintetizada en Desafio JS V2.js 
