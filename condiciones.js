//datos de la condición
const cupoCata = 8;
const inscritos = 9;

//condicional de cata abierta o llena
// si el número de cupos es menor a 8 va a arrojar la respuesta "sí hay cupo"
// Si el número de cupos es mayor o igual a 8 la respuesta será "No hay cupo"

if (inscritos > cupoCata) { 
    console.log ("No hay cupos disponibles");
} else {
    console.log ("Aún hay espacio disponible");
}
