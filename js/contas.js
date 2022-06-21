function obterUsuarios() {
    // Pegar a array de usuarios
    let usuarios = JSON.parse(window.localStorage.getItem("contas"));

    return usuarios;
}

function setUsuarios(listaUsuarios) {
    window.localStorage.setItem("contas", JSON.stringify(listaUsuarios));
}

function cadastrarUsuario(novoUsuario) {
    // Pegar a array de usuarios
    let usuarios = obterUsuarios();

    // Adicionar usuario novo na array
    usuarios.push(novoUsuario);

    // Colocar lista de usuarios atualizada no localstorage
    setUsuarios(usuarios);
}