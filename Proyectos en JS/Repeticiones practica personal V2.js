// escenario 2 del mismo ejercicio 
// en mi lógica, considera que repetir totalTazas genera confusión, al ser tanto la variable como el resultado del For of
// por ende cambié el resultado con el nombre "resultadoOperacion"
// pero no entiendo por qué el resultado final es 2 -- No se me ocurre una explicación si el proceso es el mismo
// H1 - ocurre porque no esta definida la variable ResultadoOperacion -- Descartada sigue arrojando 2 
// H2 - Lo que esta pasando es que estoy queriendo asignar como resultado una nueva variable, la cual ya tiene un valor definido
// por lo tanto, nunca va a arrojar el resultado real de la operación porque estoy queriendo "igualar" dos variables con
// Valores diferentes, en vez de darle una salida al resultado de la operación en sí para verla reflejada en terminal -- solución:
// Agregar la variable nueva ResultadoOperacion como parte de la sumatoria para que pueda dar realmente el valor total, lo cual nos permite
// al ser la variable let, nos permite usarla también como salida por justamente su propiedad de variable
// otra vez son matemáticas es como decir X = 0 + 8 - el resultado será X = 8 pero ¿porque no sería un error? tecnicamente si definimos
// X = 0, entonces la operación tendría que ser 0 = 0 + 8 -- el resutaldo sería incorrecto - a menos de que "let" en sí solo es la variable indefinida
// y lo que estamos haciendo es una sustitución de valores simple, es decir, estamos resolviendo una ecuación de primer grado por sustitución 
// Volviendo al punto, cuando introdujimos la variable nueva Y (let ResultadosOperacion) fue como escribir Y = x + 8 y Y vale 0
// Por lo tanto el resultado siempre hubiera sido 0 porque no existe relación entre Y y X en la operación en sí -- falta confirmar 
// Pregunta aún existente -- ¿porque daba de resultado 2? 
// Respuesta - lo que estaba pasando es que como estabamos haciendo una igualación, el bucle reasignaba en vez de acumular, dando el ultimo número de la lista
// Entiendo yo que como en la operación no esta incluida la variable que se va a sumar entonces la maquina entiende que quieres una igualación no una acumulación

const reservasDelDia = [2,1,2,1,2];
let totalTazas = 0;
let ResultadoOperacion = 0; 
// introduces let como variable que pueda cambiar ya que sería el "nuevo pedido" que esta llegando en este momento (o el mas reciente)

// la operación indica que vamos a introducir la variable "const cantidad" que es la que va a almacenar el resultado del bucle
// de tazas reservadas por día 

for (const cantidad of reservasDelDia) {
    ResultadoOperacion = totalTazas + cantidad + ResultadoOperacion;
}
// y aquí ocurre que el resultado final no será solo un console.log sino que será una operación de suma
// se pone totalTazas = totalTazas + cantidad porque, como indica el ejercicio, el objetivo es poder hacer la modificación lo más
// minima posible por si ingresa alguna otra reserva, por ende, solo se tendría que actualizar la const reservasDelDia para
// Actualizar el resultado

// Nota: lo que falta es la salida es console.log 
console.log(ResultadoOperacion)