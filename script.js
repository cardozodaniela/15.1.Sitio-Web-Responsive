 const textos = [
    "...dolor sit, amet consectetur adipisicing elit.",
    "Laboriosam, quo.",
    "Eligendi dicta dolores vel..."
];

let indiceActual = 0;

function cambiarTexto() {
    const textoCarrusel = document.getElementById("textoCarrusel");
    indiceActual = (indiceActual + 1) % textos.length; // Actualizar el índice
    textoCarrusel.textContent = textos[indiceActual]; // Cambiar el texto
}

// Cambiar texto cada 2 segundos
setInterval(cambiarTexto, 2000);

// Inicializar con el primer texto
cambiarTexto(); 


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("opciones").addEventListener("click", mostrarDesplegable);
});


function mostrarDesplegable() {
    const dropdown = document.getElementById("desplegable");

    // Verifica si ya hay contenido en el dropdown
    if (dropdown.innerHTML) {
        dropdown.innerHTML = ""; // Cierra el dropdown
    } else {
        let htmlContentToAppend = `
        <ul id="listaopciones" class="list-group">
          <li class="list-group-item">Opcion 1</li>
          <li class="list-group-item">Opcion 2</li>
          <li class="list-group-item">Opcion 3</li>
          <li class="list-group-item">Opcion 4</li>
        </ul>`;
        dropdown.innerHTML = htmlContentToAppend; // Abre el dropdown
    }
}

