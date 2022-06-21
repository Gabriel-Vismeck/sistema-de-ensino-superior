function setCurso(nome) {
    // Pegar o input escondido
    let curso = document.getElementById("curso");

    // Colocar o curso escolhido no input
    curso.value = nome;
}

function cadastrar() {
    // Pegar os dados digitados no formulário
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let datanasc = document.getElementById("datanasc");
    let curso = document.getElementById("curso");

    if (nome.value == "" || email.value == "" || datanasc.value == "") {
        document.getElementById("mensagem-erro").innerHTML = "Favor preenchar todos os dados";
    } else {
        // Senha vai ser AAAAMMDD
        let senha = datanasc.value.replace(/-/g, "");
    
        let novoUsuario = {
            email: email.value,
            nome: nome.value,
            datanasc: datanasc.value,
            senha: senha,
            eFuncionario: false,
            curso: curso.value,
            notas: [0, 0, 0, 0]
        };

        // Pegar e esconder o popup de matricula
        var modalMatricula = bootstrap.Modal.getOrCreateInstance(document.getElementById("popupMatricula"));
        modalMatricula.toggle();

        // Pegar o popup de mensagem de sucesso
        var modalMensagem = bootstrap.Modal.getOrCreateInstance(document.getElementById("popupMensagem"));

        // Mudar a mensagem para incluir os login e senha da pessoa registrada
        document.querySelector("#popupMensagem .modal-body").innerHTML = `
        <p>Matrícula feita com sucesso</p>
        <p>Login: ${email.value}</p>
        <p>Senha: ${senha}</p>
        `;

        modalMensagem.show();

        // Abrir o popup de mensagem de sucesso
        cadastrarUsuario(novoUsuario)
    }
}