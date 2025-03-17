const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear un solo amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    // Selecciona un amigo aleatorio de la lista
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Muestra el resultado en pantalla
    resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
