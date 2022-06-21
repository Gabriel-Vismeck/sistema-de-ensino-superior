function getUsuarioLogado() {
    return JSON.parse(window.sessionStorage.getItem("usuarioLogado"));
}

function setUsuarioLogado(usuario) {
    window.sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
}

function getIndice() {
    return window.sessionStorage.getItem("indiceUsuario");
}

function setIndice(indice) {
    window.sessionStorage.setItem("indiceUsuario", indice);
}