/* 
    declaração
    içamento
    hoisting
    var paginaInicial = undefined

    ecmaScript documentação/especificação do javascript e também de outras linguagens

    alert() e prompt() são API's do browser
    prompt() -> retorna o valor digitado

    MANIPULAÇÃO DE STRING

    paginaInicial.substring(0, 7) -> verifica do zero até tal número

    =    recebe um valor
    ==   igual mas nem tanto, converte para number, ou seja converte os resultados
    ===  exatamente igual

    Boolean('') -> false
    Boolean(null)
    Boolean(undefined)
    Boolean(0)
*/

let paginaInicial = prompt("Digite a página inicial:");

if (paginaInicial) {
    if (paginaInicial.substring(0, 7) !== 'http://' && paginaInicial.substring(0, 8) !== 'https://') {
        // assignement (atribuição)
        paginaInicial = 'http://' + paginaInicial;
    }

    $janelaPrincipal.src = paginaInicial;
    $inputEndereco.value = paginaInicial;
} else {
    $janelaPrincipal.src = 'blank';
}

