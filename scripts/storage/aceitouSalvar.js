function setAceitouSalvar(valor) {
    aceitouSalvar = valor;
    localStorage.setItem("aceitouSalvar", valor);
}

let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

function setAceitou() {
    setAceitouSalvar(true);
}

function setNaoAceitou() {
    setAceitouSalvar(false);
}

// Revealing Module Pattern
export {
    aceitouSalvar,
    setAceitou,
    setNaoAceitou
}