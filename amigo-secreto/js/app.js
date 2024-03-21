let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    amigos.push(nome.value);

    if (lista.textContent == ''){
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
}


function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (i = 0; i < amigos.length; i++){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}