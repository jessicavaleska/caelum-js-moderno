import { Endereco } from "/scripts/endereco/Endereco.js";

export function carregar(seila) {
    let endereco;

    if(typeof seila === 'string') {
        endereco = new Endereco(seila);
    } else if(seila instanceof Endereco) {
        endereco = seila;
    } else {
        throw new Error(`
        Não foi possível carregar o seguinte endereço:
        Valor: ${JSON.stringify(seila)}
        Tipo: ${typeof seila}
        `.trim());
    }
    
    $janelaPrincipal.src = endereco.urlCompleta;
    $inputEndereco.value = endereco.urlCompleta;
}


/**
 * 
 * 
 * else if(typeof seila.urlCompleta === 'string' && typeof urlResumida === 'string') {
        endereco = seila;
    }
 */