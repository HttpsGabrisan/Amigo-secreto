let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if (amigos.includes(nome.value)){
        alert('O nome já foi adicionado.');
        return;
    }else if (nome.value == ''){
        alert('Digite um nome para continuar.');
        return;
    }

    amigos.push(nome.value);

    if (lista.textContent == ''){
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    
    nome.value = '';

}


function sortear() {
    if(amigos.length <=3){
        alert('Digite o nome de pelo menos 4 amigos.');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (i = 0; i < amigos.length; i++){
        if(i == amigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }

    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    lista = '';
    amigos = [];
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}