// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona à lista e atualiza a interface
    listaAmigos.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Atualiza a lista exibida na tela
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de re-renderizar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão para remover um nome da lista
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.onclick = () => removerAmigo(index);
        li.appendChild(btnRemover);

        ul.appendChild(li);
    });
}

// Remove um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para o sorteio.");
        return;
    }

    let embaralhado = [...listaAmigos];
    
    // Algoritmo para evitar auto sorteio
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

// Exibe o resultado na tela
function mostrarResultado(resultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; 

    Object.keys(resultado).forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        ulResultado.appendChild(li);
    });
}
