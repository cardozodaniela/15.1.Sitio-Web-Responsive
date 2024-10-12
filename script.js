const textos = [
    "Opción 1",
    "Línea de texto 2",
    "Línea de texto 3"
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