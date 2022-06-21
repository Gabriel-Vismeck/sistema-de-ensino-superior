function enviarMensagem() {
    // Pegar os dados digitados no formulário
    let nome = document.getElementById("inputNome");
    let email = document.getElementById("inputEmail");
    let mensagem = document.getElementById("inputMensagem");

    if (nome.value == "" || email.value == "" || mensagem.value == "") {
        document.getElementById("mensagem-erro").innerHTML = "Favor preenchar todos os dados";
    } else {
        // Pegar e abrir o popup de mensagem de sucesso
        var modalMensagem = bootstrap.Modal.getOrCreateInstance(document.getElementById("popupMensagem"));
        modalMensagem.show();
    }
}