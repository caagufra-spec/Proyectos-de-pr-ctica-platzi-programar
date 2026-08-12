// pregunta clave del ejercicio ¿Cuanto vale totalTazas cuando termina el bucle?

//esto es un ejercicio/ ejemplo de reservaciones en el día

// Según mi lógica, primero estamos partiendo de que se estan introduciendo valores estáticos, es deicr, como si todos los días
// se fueran a hacer estas mismas reservaciones, pero entiendo que es para cuestiones del ejercicio 

const reservasDelDia = [2,1,2,1,2];
let totalTazas = 0;
// introduces let como variable que pueda cambiar ya se sería el "nuevo pedido" que esta llegando en este momento (o el mas reciente)

// la operación indica que vamos a introducir la variable "const cantidad" que es ls que va a almacenar el resultado del bucle
// de tazas reservadas por día 

for (const cantidad of reservasDelDia) {
    totalTazas = totalTazas + cantidad;
}
// y aquí ocurre que el resultado final no será solo un console.log sino que será una operación de suma
// se pone totalTazas = totalTazas + cantidad porque, como indica el ejercicio, el objetivo es poder hacer la modificación lo más
// minima posible por si ingresa alguna otra reserva, por ende, solo se tendría que actualizar la const reservasDelDia para
// Actualizar el resultado

// Nota: lo que falta es la salida es console.log 
console.log(totalTazas)

// El resultado de la operación será = 8 (estableciendo let totalTazas = 0) 
