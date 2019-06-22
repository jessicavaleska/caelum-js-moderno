/**
 * Função sofre o hoisting e é executada inteira
 * 
 * 
 */

import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
// named export
// destructuring -> desestruturação, explodindo
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar;
$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;

// o que vai ser executado quando o evento de click acontecer
// função é um tipo de dado, bem como boolean e com isso pode ser chamado
// chamando a funcao salvar() pegamos o retorno dela
$botaoSalvar.onclick = salvar

// função de callback
// declaração de função
// function declaration
function salvar() {
    /*
        localStorage.setItem("aceitouSalvar", $inputPermitiuSalvar.checked);
        localStorage.setItem("paginaInicial", $inputPaginaInicial.value);
        setAceitouSalvar($inputPermitiuSalvar.checked);
        setPaginaInicial($inputPaginaInicial.value);
    */

    // expressão de função
    // function expression
    // expressão é um valor, declaração é um bloco de código
    const enderecoCompleto = $inputPermitiuSalvar.checked === true ? storageAceitouSalvar.setAceitou : storageAceitouSalvar.setNaoAceitou;

    enderecoCompleto();

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value);

    $inputPaginaInicial.value = enderecoCompleto;

    storagePaginaInicial.setPaginaInicial(enderecoCompleto);

}
