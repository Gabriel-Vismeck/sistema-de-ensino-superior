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

// Pegar a array de usuarios
let usuarios = obterUsuarios();

// Pegar a div onde terá a tabela
let divUsuarios = document.getElementById('usuarios');

let listaUsuarios = 
// Abrir a tabela
`<table class='tabela-usuarios'>
<tr>
<th>Nome</th>
<th>E-Mail</th>
<th>Data de Nascimento</th>
<th>Curso</th>
<th>Notas</th>
</tr>`;

// Adicionar cada usuário na tabela
for (let i = 0; i < usuarios.length; i++) {
  let usuario =
  `<tr>
  <td>${usuarios[i].nome}</td>
  <td>${usuarios[i].email}</td>
  <td>${usuarios[i].datanasc}</td>
  <td>${usuarios[i].eFuncionario ? `-` : getNomeCurso(usuarios[i].curso)}</td>
  <td>${
    usuarios[i].eFuncionario ? `-` : `
    <button class="botao-notas" onclick="setAluno('${i}')" data-bs-toggle="modal" data-bs-target="#popupNotas">
      <i class="fa-solid fa-pen"></i>
    </button>`
  }</td>
  </tr>
  <tr>`;

  listaUsuarios += usuario;
}

// Fechar a tabela
listaUsuarios += "</table>";

// Colocar na tela
divUsuarios.innerHTML = listaUsuarios;

function setAluno(indiceAluno) {
  // Deixar o número da indice no elemento do popup
  document.getElementById("indice-usuario").value = indiceAluno;

  // Ir em cada elemento do popup
  for (let i = 0; i < usuarios[indiceAluno].notas.length; i++) {
    // Pegar o elemnto da nota da materia
    let notaMateria = document.getElementById("materia" + i);
    // Preencher o elemento com a nota
    notaMateria.value = usuarios[indiceAluno].notas[i];
  }
}

function mudarNota() {
  // Pegar o número da indice do elemento do popup
  let indiceAluno = parseInt(document.getElementById("indice-usuario").value);

  // Declarar a array que guardará as novas notas
  let arrayNotas = [];

  // Ir em cada elemento do popup
  for (let i = 0; i < usuarios[indiceAluno].notas.length; i++) {
    // Pegar o elemnto da nota da materia
    let notaMateria = document.getElementById("materia" + i);
    // Adicionar valor na array
    arrayNotas.push(parseInt(notaMateria.value));
  }

  // Mudar a nota do usuario para a nova nota
  usuarios[indiceAluno].notas = arrayNotas;

  // Registrar mudança
  setUsuarios(usuarios);
}