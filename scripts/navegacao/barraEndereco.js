import { carregar } from "/scripts/navegacao/carregar.js";
import { formataEndereco } from "/scripts/endereco/formataEndereco.js";
import { Endereco } from "/scripts/endereco/Endereco.js";

/*
    $inputEndereco.onfocus = exibeEnderecoCompleto
    $inputEndereco.onblur = exibeEnderecoResumido
    $janelaPrincipal.onload = exibeEnderecoResumido
*/

let endereco;

$janelaPrincipal.addEventListener('load', function() {
    endereco = new Endereco($janelaPrincipal.contentWindow.location.href);
});

$inputEndereco.addEventListener('focus', exibeEnderecoCompleto);
$inputEndereco.addEventListener('blur', exibeEnderecoResumido);
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido);

function exibeEnderecoCompleto(){
    $inputEndereco.value = endereco.urlCompleta;
}

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida;
}

$inputEndereco.addEventListener('keyup', function(event) {
    const apertouEnter = event.key === 'Enter';

    if (apertouEnter) {
        endereco = new Endereco($inputEndereco.value);
        carregar(endereco);
    }
});

/**
 * __proto__ serve para armazenar todas as infos que tiver no objeto (todo objeto tem essa propiedade), 
 * que também é um objeto, olha que doidera
 */
