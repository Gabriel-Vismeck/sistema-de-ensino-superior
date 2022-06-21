// Adicionar dois usuários padrão caso não exista nenhum
let loginsPadrao = [
    {
        "email": "func@email.com",
        "nome": "Funcionario",
        "datanasc": "2022-05-21",
        "senha": "senha1",
        "eFuncionario": true
    },
    {
        "email": "user@email.com",
        "nome": "Aluno",
        "datanasc": "2022-05-11",
        "senha": "senha2",
        "eFuncionario": false,
        "curso": "direito",
        "notas": [12, 24, 35, 45]
    }
]

// Caso os usuários padrão não existam, adicionar eles
if (obterUsuarios() === null) {
    setUsuarios(loginsPadrao);
}

function fazerLogin() {
    // Pegar os dados digitados no formulário
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");

    // Pegar a array de usuarios
    let usuarios = obterUsuarios();

    // Caso não tiver um usuario com o login e senha, será nulo
    // Caso tiver, será o usuario
    let usuario = usuarios.find((item) => {
        return item.email === login.value && item.senha === senha.value;
    })

    // Caso tiver um usuario com o nome
    if (login.value == "" || senha.value == "") {
        document.getElementById("mensagem-erro").innerHTML = "Favor preencha todos os campos";
    } else if (usuario == null) {
        document.getElementById("mensagem-erro").innerHTML = "Usuário ou senha não encontrados";
    } else {
        // Deixar o usuario logado como o usuario
        setUsuarioLogado(usuario);

        // Procurar e definir a indice
        let indice = usuarios.findIndex((item) => {
            return item.email === login.value && item.senha === senha.value;
        });
        setIndice(indice);
        
        // Redirecionar para o portal do aluno
        window.location = "/paginas/portaldoaluno.html";
    }
}