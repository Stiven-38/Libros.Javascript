// Funcion para aumentar la cantidad de un libro
function aumentarCantidad(libroId) {
    // Obtener el elemento que muestra la cantidad para el libro especificado
    var cantidadElemento = document.getElementById(libroId + 'Cantidad');
    // Obtener la cantidad actual como un numero entero
    var cantidad = parseInt(cantidadElemento.textContent);
    // Incrementar la cantidad en 1 y actualizar la cantidad mostrada
    cantidadElemento.textContent = cantidad + 1;
}

// Funcion para disminuir la cantidad de un libro
function disminuirCantidad(libroId) {
    // Obtener el elemento que muestra la cantidad para el libro especificado
    var cantidadElemento = document.getElementById(libroId + 'Cantidad');
    // Obtener la cantidad actual como un numero entero
    var cantidad = parseInt(cantidadElemento.textContent);
    // Si la cantidad es mayor que 0, disminuir la cantidad en 1 y actualizar la cantidad mostrada
    if (cantidad > 0) {
        cantidadElemento.textContent = cantidad - 1;
    }
}

// Función para calcular el total de la compra
function calcularTotal() {
    // Obtener las cantidades de cada libro como números enteros
    var libro1Cantidad = parseInt(document.getElementById('libro1Cantidad').textContent);
    var libro2Cantidad = parseInt(document.getElementById('libro2Cantidad').textContent);

    // Establecer los precios para cada libro
    var precioLibro1 = 100;
    var precioLibro2 = 200;

    // Calcular el monto total de la compra segun las cantidades y precios
    var totalCompra = (libro1Cantidad * precioLibro1) + (libro2Cantidad * precioLibro2);

    // Actualizar el total de la compra mostrado
    document.getElementById('totalCompra').textContent = totalCompra;
}

// Funcion para manejar las pulsaciones de teclas (específicamente, las teclas + y -
function handleKeyPress(event) {
    // Si la tecla presionada es '+', aumentar las cantidades de ambos libros
    if (event.key === '+') {
        aumentarCantidad('libro1');
        aumentarCantidad('libro2');
    } 
    // Si la tecla presionada es , disminuir las cantidades de ambos libros
    else if (event.key === '-') {
        disminuirCantidad('libro1');
        disminuirCantidad('libro2');
    }
}
