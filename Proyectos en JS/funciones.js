function calcularPrecio(precioUnitario, cantidad){
    const total = precioUnitario * cantidad;
    return total;
}

//hasta este punto solo generamos la función, el proceso repetitivo
// que se hará constantemente si le introducimos los valores

//ahora lo que hay que hacer es introducirle valores para que pueda trabajar
console.log(calcularPrecio(5,2));
console.log(calcularPrecio(3,4));
console.log(calcularPrecio(7,1));
