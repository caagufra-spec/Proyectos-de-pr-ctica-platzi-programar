// En el proyecto "funcion aplicada a regla de negocio" solo se valida una regla de negocio
// Se valida la regla de "confirmar reservación de tazas" - tomando de base que se puede hacer un máximo de 2 tazas
// Regla faltante - Tienda tiene un max. de 50 tazas al día entre todos los clientes
// Desafío - ¿como podemos hacer que se validen las dos reglas? 
// Pista - Necesitas más de un parámetro 

// Esta es la V2 del proyecto pero más sintetizado

function puedeReservarTazasPorPersonayGlobal (cantidadPorPersona, tazas) {
    if (cantidadPorPersona <=2, tazas <=50) {
        return true;
    } else {
        return false;
    }
}

let cantidadPorPersona = 1
let tazas = 51

if (puedeReservarTazasPorPersonayGlobal(cantidadPorPersona, tazas)) {
    console.log ("Reserva confirmada");
} else { 
    console.log("lo siento, ya no hay cupo")
}

// ¿Que cambie tomando de referencia el ejercicio? - el ejercicio limitaba a cambiar manualmente 
// un valor dentro del if, lo cual considero que no era muy realista y era más tedioso
// por ende, opte por generar dos variables let que puedan ser modificadas manualmente y el resultado se ajusta

// Error cazado - Yo estaba poniendo "if (puedeReservarTazasPorPersonayGlobal(cantidadPorPersona) && (tazas)) {"
// Causa, estaba separando "tazas" y "cantidadPorPersona" como si fueran funciones diferentes
// Por lo tanto, yo creo que como solamente estaba capturando el dato de "cantidadPorPersona"
// Diplicó el valor, es decir, hizo "cantidad por persona = 51" y "tazas = 51" y por eso
// Siempre marcaba que el cupo estaba lleno 