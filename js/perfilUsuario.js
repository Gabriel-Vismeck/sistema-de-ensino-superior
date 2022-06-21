// Pegar o usuario logado
let usuarioLogado = getUsuarioLogado();

// Pegar os dados digitados no formulário
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let datanasc = document.getElementById("datanasc");
let curso = document.getElementById("curso");
let senha = document.getElementById("senha");

// Colocar os dados do usuario nas caixas
nome.value = usuarioLogado.nome;
email.value = usuarioLogado.email;
datanasc.value = usuarioLogado.datanasc;
senha.value = usuarioLogado.senha;

// Caso for aluno, mostre qual curso está
if (!usuarioLogado.eFuncionario) {
    curso.value = getNomeCurso(usuarioLogado.curso);
}
// Caso for funcionario, esconda o campo curso
else {
    let labelCurso = document.getElementById("labelCurso");

    curso.classList.add("escondido");
    labelCurso.classList.add("escondido");
}

function getNomeCurso(codigoCurso) {
    switch (codigoCurso) {
      case "engenharia-software": return "Engenharia de Software"
      case "medicina":            return "Medicina"
      case "direito":             return "Direito"
      case "engenharia-mecanica": return "Engenharia Mecânica"
      case "administracao":       return "Administração"
      case "comunicacao":         return "Comunicação Social"
    }
  }

function mudarSenha() {
    // Pegar os inputs da senha
    let novaSenha = document.getElementById("nova-senha");
    let novaSenha2 = document.getElementById("nova-senha2");

    // Fazer a validação do formulario
    let msgErro = document.getElementById("mensagem-erro");
    // Caso esteja vazio
    if (novaSenha.value == "" || novaSenha2.value == "") {
        msgErro.innerHTML = "Favor preencher os campos";
    }
    // Caso as duas senhas sejam diferentes
    else if (novaSenha.value != novaSenha2.value) 
    {
        msgErro.innerHTML = "As duas senhas devem ser iguais";
    }
    // Caso esteja certo
    else {
        // Apagar a mensagem de erro
        msgErro.innerHTML = "";

        // Atualizar senha do usuario
        usuarioLogado.senha = novaSenha.value;

        // Obter lista de usuarios
        let usuarios = obterUsuarios();

        // Mudar a senha do usuario logado
        usuarios[getIndice()] = usuarioLogado;

        // Registrar mudança
        setUsuarios(usuarios);
        setUsuarioLogado(usuarioLogado);

        // Mudar na tela para a nova senha
        senha.value = novaSenha.value;

        // Pegar e esconder o popup de mudar a senha 
        var modalMensagem = bootstrap.Modal.getOrCreateInstance(document.getElementById("popupSenha"));
        modalMensagem.hide();
    }
}