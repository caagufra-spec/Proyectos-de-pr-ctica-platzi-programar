const maxPedidosalDia = 2
const maxTazasPedidasalDia = 2 
let PedidosporCliente = (2)
let tazasPedidasalDiaCliente = (1)


if ((PedidosporCliente < maxPedidosalDia) && (tazasPedidasalDiaCliente < maxTazasPedidasalDia)) {
    console.log (" Aún puedes hacer tus 2 pedidos");
} else if ((PedidosporCliente === maxPedidosalDia) && (tazasPedidasalDiaCliente < maxTazasPedidasalDia)) {
    console.log (" Haz alcanzado el máximo de pedidos por el día de hoy");    
} else if ((PedidosporCliente < maxPedidosalDia) && (tazasPedidasalDiaCliente === maxTazasPedidasalDia)) {
    console.log ("Haz alcanzado el maximo de pedidos por hoy");
} else ((PedidosporCliente === maxPedidosalDia) && (tazasPedidasalDiaCliente === maxTazasPedidasalDia)) 
    console.log ("Haz alcanzado el máximo de pedidos y tazas por hoy"); 


// Técnicamente está resuelto el error - nueva pregunta ¿porque arroja dos resultado si esta el operador AND?
// 