const maxPedidosalDia = 2
const maxTazasPedidasalDia = 2 
let tazasPedidasporCliente = 0

if (maxTazasPedidasalDia === 2 && maxPedidosalDia === 2) {
    console.log ("Haz alcanzado el máximo de pedidos y tazas por hoy") 
} else if (maxPedidosalDia === 2 && maxTazasPedidasalDia < 2) {
    console.log (" Haz alcanzado el máximo de pedidos por el día de hoy")    
} else if (maxPedidosalDia < 2 && maxTazasPedidasalDia === 2) {
    console.log ("Haz alcanzado el maximo de pedidos por hoy")
} else (maxPedidosalDia < 2 && maxTazasPedidasalDia < 2)
    console.log (" Aún puedes hacer tus pedidos")
console.log (tazasPedidasporCliente)

// ¿Cual fue mi error?
// definido dos const y tendría sentido hacer el if/else si estuvieran condicionadas entre ellas pero eso no esta expresado en el if/else
// por lo tnato el resultado siempre estará incompleto
// introduce let para condicionar las respuestas a los pedidos del cliente
// ¿problema? - No esta relacionada la variable let con las const = no genera ningun resultado
// solución - enlazar el let a las const y reestructurar el if/else a la variable let para que ahora sí arroje el resultado deseado