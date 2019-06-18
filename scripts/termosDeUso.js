/*
    Uncaught Sintaxe -> erro de sintaxe

    localStorage -> guarda os valores do browser

    null       -> vazio
    undefined  -> não existe
*/

if (localStorage.getItem('aceitouTermos') === null) {
    const nome = prompt('Qual o seu nome?');

    const aceitouTermos = confirm(`
        Olá ${nome}!

        Antes de usar o Cake, precisamos que 
        você aceite nossos termos de uso:

        • Você aceita que este software foi 
          feito por pessoas que participaram 
          do curso de Java.
        • Você aceita que o código dessas 
          pessoas pode acessar tudo o que 
          você digitar aqui.
    `);

    if (!aceitouTermos) {
        alert(nome + ', uma pena mesmo! Não podemos continuar juntos...');
        window.close();
    } else {
        localStorage.setItem('aceitouTermos', aceitouTermos);
    }
}

