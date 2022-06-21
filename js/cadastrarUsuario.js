// O site deve ser somente acessível por funcionários
if (!getUsuarioLogado().eFuncionario) {
    window.location ="/paginas/portaldoaluno.html";
}

// Esconder opcoes de curso caso usuario a ser adicionado seja funcionario
function MostrarEsconder(checkbox)
{
    if(checkbox.checked)
    {
        document.getElementById("labelCurso").style.display = "none";
        document.getElementById("selectCurso").style.display = "none";
    }
    else
    {
        document.getElementById("labelCurso").style.display = "block";
        document.getElementById("selectCurso").style.display = "block";
    }
}

function cadastrar() {
    // Pegar os dados digitados no formulário
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let datanasc = document.getElementById("datanasc");
    let funcionario = document.getElementById("funcionario");

    if (nome.value == "" || email.value == "" || datanasc.value == "") {
        document.getElementById("mensagem-erro").innerHTML = "Favor preenchar todos os dados";
    } else {
        // Senha vai ser AAAAMMDD
        let senha = datanasc.value.replace(/-/g, "")

        let novoUsuario;

        // Vai criar um objeto usuario ou funcionario dependendo da checkbox
        if (funcionario.checked) {
            novoUsuario = {
                email: email.value,
                nome: nome.value,
                datanasc: datanasc.value,
                senha: senha,
                eFuncionario: funcionario.checked
            }
        } else {
            let opcaoCurso = document.getElementById("selectCurso");
            
            novoUsuario = {
                email: email.value,
                nome: nome.value,
                datanasc: datanasc.value,
                senha: senha,
                eFuncionario: funcionario.checked,
                curso: opcaoCurso.value,
                notas: [0, 0, 0, 0]
            }
        }

        cadastrarUsuario(novoUsuario)
        
        // Pegar o popup de mensagem de sucesso
        var modalMensagem = bootstrap.Modal.getOrCreateInstance(document.getElementById("popupMensagem"));

        // Mudar a mensagem para incluir os login e senha da pessoa registrada
        document.querySelector(".modal-body").innerHTML = `
        <p>Matrícula feita com sucesso</p>
        <p>Login: ${email.value}</p>
        <p>Senha: ${senha}</p>
        `;

        // Abrir o popup de mensagem de sucesso
        modalMensagem.show();
    }
}