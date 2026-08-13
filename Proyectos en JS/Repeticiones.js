//este es el ejercicio exactamente igual de la clase
console.log ("V60");
console.log ("Kyoto drip");
console.log ("Siphon");
console.log (" Prensa francesa");

//Una lista en JS se llama Array
// En este caso vamos acrear una lista con los datos
const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa francesa"];

// vamos a usar For of para que recorra la lista
for (const metodo of metodos) {
    console.log(metodo);
}
// Aquí mi primera pregunta es ¿porque agrega const metodo?
// la respuesta es que es una nueva variable que nos va a permitir que
// la máquina meta la información perteneciente a la lista en un "contenedor"
// es decir, me refiero a que tendremos un lugar a donde mandar el resutlado del for of
// y este resultado se expresará por medio del console.log
// yo lo veo como cajas - si quieres saber un resultado de una operación necesitas saber donde vas a 
// depositar dicho resultado, en este caso la caja es const metodo, y el resultado es el contenido de la lista metodos

console.log (" Fin del proceso")
//en este caso agregamos este nuevo console.log para saber que ya termino el proceso
// es una buena manera de saber que no se está quedando en bucle el proceso
//Y que ya no hay más elementos de la lista que recorrer