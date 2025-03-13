# Amigo-Secreto
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de re-renderizar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.onclick = () => removerAmigo(index);
        li.appendChild(btnRemover);

        ul.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para o sorteio.");
        return;
    }

    let embaralhado = [...listaAmigos];
    

    let resultado = {};
    let tentativas = 0;

    do {
        embaralhado = embaralhado.sort(() => Math.random() - 0.5);
        tentativas++;
    } while (embaralhado.some((amigo, i) => amigo === listaAmigos[i]) && tentativas < 10);

    listaAmigos.forEach((amigo, i) => {
        resultado[amigo] = embaralhado[i];
    });

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; 

    Object.keys(resultado).forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        ulResultado.appendChild(li);
    });
}
