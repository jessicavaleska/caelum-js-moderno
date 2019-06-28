// encapsulamento
// type coercing
const listaSites = JSON.parse(sessionStorage.getItem('historico')) || [];
let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico'));

// closures
export function adiciona(endereco) {
    if(endereco !== listaSites[posicao]) {
        // listaSites.splice(posicao + 1) - remove o último elemento da lista
        // listaSites.slice(0, 2) - retira o espaço que foi atribuído
        listaSites.splice(posicao + 1);
        listaSites.push(endereco);
        posicao++;

        sessionStorage.setItem('historico', JSON.stringify(listaSites));
        sessionStorage.setItem('posicaoHistorico', posicao);
    }
}

export function volta() {
    const isPrimeiraPosicao = posicao === 0;

    if(listaSites.length !== 1 && !isPrimeiraPosicao) {
        posicao = posicao - 1;
        return listaSites[posicao];
    }
}

export function avancar() {
    const isUltimaPosicao = posicao === listaSites.length - 1;

    if(listaSites.length !== 1 && !isUltimaPosicao) {
        posicao = posicao + 1;
        return listaSites[posicao];
    }
}
