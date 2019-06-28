// função construtora
// função factory
// Fábrica de objetos
function Endereco(endereco) {
    /*if(this === undefined) {
        return new Endereco(endereco);
    }*/

    if(this === undefined || this !== undefined && !(this instanceof Endereco)) {
        return new Endereco(endereco);
    }

    let enderecoCompleto;
    let enderecoResumido;

    if(!endereco || endereco ==='blank') {
        enderecoCompleto = 'blank';
        enderecoResumido = 'blank';
    } else {
        const url = new URL(endereco);
    
        if(url.hostname === 'localhost') {
            const paginaLocal = url.pathname.replace("/", "");
            enderecoCompleto = paginaLocal;
            enderecoResumido = paginaLocal;
        } else {
            /* 
              Colocando apenas `enderecoCompleto = url` também funciona
              Pois na hora do type coercing a função toString é chamada
                de qualquer jeito
            */
            enderecoCompleto = url.toString();
            enderecoResumido = url.hostname;
        }
    }

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;
    
    /**
     * Quando executa com new
     * new é um operador
     * modifica o this da sua função
     * 
     * const this = {
     *      __proto__: Endereco
     * }
     */

    // 
    /**
     * objeto literal - literal object
     * 
     * return { urlCompleta: enderecoCompleto, urlResumida: enderecoResumido }
     * 
     */
    
} 

export { Endereco }