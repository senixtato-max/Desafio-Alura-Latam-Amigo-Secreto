// Array donde se guardarán los nombres de los amigos
let amigos = [];

// Función para agregar un nuevo amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: verificar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visual en el HTML
    mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpiar contenido anterior
    lista.innerHTML = "";

    // Recorrer el array e insertar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
