$inputEndereco.onfocus = exibeEnderecoCompleto;
$inputEndereco.onblur = exibeEnderecoResumido;
$janelaPrincipal.onload = exibeEnderecoResumido;

function exibeEnderecoCompleto() {
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href;
}

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href);
    const endercoResumido = url.hostname;
    
    $inputEndereco.value = endercoResumido;
}