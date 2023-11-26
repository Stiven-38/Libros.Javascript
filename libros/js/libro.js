let totalCompra = 0; // Variable para almacenar el total de la compra
const libros = [
    { titulo: "Libro 1", precio: 20 },
    { titulo: "Libro 2", precio: 30 }

];


// Funcion para incrementar la cantidad y actualizar el total
function incrementarLibro(index) {
    const cantidadElemento = document.getElementById(`cantidad-${index}`);
    const totalElemento = document.getElementById(`total-${index}`);

    let cantidad = parseInt(cantidadElemento.innerHTML);
    let precioLibro = libros[index].precio;

    // Incrementar la cantidad
    cantidad += 1;
    cantidadElemento.innerHTML = cantidad;

    // Actualizar el total del libro
    let totalLibro = cantidad * precioLibro;
    totalElemento.innerHTML = `${totalLibro.toFixed(2)}`;

    // Actualizar el total de la compra
    totalCompra += precioLibro;
    mostrarTotalCompra();
}

function calcularTotal() {
    const totalCompraText = document.getElementById("totalCompraText");
    totalCompraText.style.display = "block";

    const totalCompraElement = document.getElementById("totalCompra");
    totalCompraElement.textContent = totalCompra;
}

// Funcion para inicializar el HTML con la informacion de los libros
function inicializarLibros() {
    const librosContainer = document.getElementById("libros-container");

    libros.forEach((libro, index) => {
        const libroDiv = document.createElement("div");
        libroDiv.classList.add("libro-container"); // Clase para el espaciado
        libroDiv.innerHTML = `
            <p>${libro.titulo}: ${libro.precio.toFixed(2)}</p>
            <button type="button" onclick="incrementarLibro(${index})">Agregar</button>
            <span>Cantidad: <span id="cantidad-${index}">0</span></span>
            <span>Total: $<span id="total-${index}">0.00</span></span>
        `;

        librosContainer.appendChild(libroDiv);
    });
}

// Inicializar la informacion de los libros en el HTML
inicializarLibros();
