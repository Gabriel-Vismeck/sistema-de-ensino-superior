// Caso usuario logado esteja nulo, ou seja, não exista, redirecionar para o começo
if (getUsuarioLogado() === null) {
    window.location ="/index.html";
}