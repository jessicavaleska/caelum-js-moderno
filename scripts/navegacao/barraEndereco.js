import { carregar } from "/scripts/navegacao/carregar.js";
import { formataEndereco } from "/scripts/endereco/formataEndereco.js";

/*
    $inputEndereco.onfocus = exibeEnderecoCompleto
    $inputEndereco.onblur = exibeEnderecoResumido
    $janelaPrincipal.onload = exibeEnderecoResumido
*/

$inputEndereco.addEventListener('focus', exibeEnderecoResumido);
$inputEndereco.addEventListener('blur', exibeEnderecoResumido);
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido);

function exibeEnderecoCompleto(){
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href;
}

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href);
    const enderecoResumido = url.hostname;

    $inputEndereco.value = enderecoResumido;
}

$inputEndereco.addEventListener('keyup', function(event) {
    const apertouEnter = event.key === 'Enter';

    if (apertouEnter) {
        const enderecoCompleto = formataEndereco($inputEndereco.value);
        carregar(enderecoCompleto);
    }
});
