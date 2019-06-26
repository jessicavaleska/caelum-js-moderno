import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import { carregar } from '/scripts/navegacao/carregar.js';
import * as historico from '/scripts/navegacao/historico.js';

//TODO criar módulo pra isso
// Pegar pagina atual do localStorage
const paginaAtual = sessionStorage.getItem('paginaAtual');

const paginaParaCarregar = paginaAtual !== null ? paginaAtual : storagePaginaInicial.paginaInicial;

export const enderecoCompleto = formataEndereco(paginaParaCarregar);

carregar(enderecoCompleto);

// $janelaPrincipal.onload = salvaPaginaAtual;
// função de callback associada a um evento
$janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
    const endereco = $janelaPrincipal.contentWindow.location.href;
    sessionStorage.setItem('paginaAtual', endereco);
    
    historico.adiciona(endereco);
});

// let listaSites = [];
// const listaSites = []
// const não garante imutabilidade (adicionar ou remover coisas), mas sim para reatribuir (lista = 'oi')

// o null vira zero, por conta do type coersing
// o -1 "esvazia" o array, porque o array [] começa com 0
// let posicao = -1;

$botaoVoltar.addEventListener('click', function() {
    const enderecoVolta = historico.volta();

    if(enderecoVolta !== undefined) {
        carregar(enderecoVolta);
    }
});

$botaoAvancar.addEventListener('click', function() {
    const enderecoAvanca = historico.avancar();

    if(enderecoAvanca !== undefined) {
        carregar(enderecoAvanca);
    }
});
