//datos de la condición
const cupoCata = 8;
const inscritos = 9;

//condicional de cata abierta o llena
// si el número de inscritos es menor a 8 va a arrojar la respuesta "sí hay cupo"
// Si el número de inscritos es mayor a 8 la respuesta será "No hay cupo"
// si el número de inscritos es igual al número de cupos - respuesta: "No hay cupo"

if (inscritos < cupoCata) { 
    console.log ("No hay cupos disponibles");
} else if (inscritos === cupoCata) {
    console.log ("Aún hay espacio disponible");
} else (inscritos > cupoCata) 
    console.log ("No hay cupos disponibles");

