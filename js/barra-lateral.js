function toggle() {
  var element = document.getElementById("barra-lateral");

  if (element.classList.contains('fechado')) {
    element.classList.remove("fechado");
    element.classList.add("aberto");
  } else {
    element.classList.remove("aberto");
    element.classList.add("fechado");
  }
}

function getNomeSite(local) {
  switch (local) {
    case "/paginas/portaldoaluno.html":    return "Portal do Aluno"
    case "/paginas/comunicados.html":      return "Comunicados"
    case "/paginas/gradeCurricular.html":  return "Grade Curricular"
    case "/paginas/notas.html":            return "Notas"
    case "/paginas/calendario.html":       return "Calendário"
    case "/paginas/usuarios.html":         return "Listar Usuários"
    case "/paginas/cadastrarUsuario.html": return "Fazer Matrícula"
    case "/paginas/contato.html":          return "Contato"
    default:                               return "Portal do Aluno"
  }
}

document.getElementById("barra-lateral").innerHTML = 
`
<div class="titulo-barra">${getNomeSite(window.location.pathname)}</div>
<a href="/paginas/portaldoaluno.html" ${window.location.pathname == "/paginas/portaldoaluno.html" ? `class = "ativo"` : ``}>
  <i class = "fas fa-qrcode"></i>
  <span>Painel</span>
</a>
<a href="/paginas/comunicados.html" ${window.location.pathname == "/paginas/comunicados.html" ? `class = "ativo"` : ``}>
  <i class="fa-solid fa-comment"></i>
  <span>Comunicados</span>
</a>
${
  // Grade Curricular
  // Disponível para alunos
  getUsuarioLogado().eFuncionario ? `` : `
  <a href="/paginas/gradeCurricular.html" ${window.location.pathname == "/paginas/gradeCurricular.html" ? `class = "ativo"` : ``}>
    <i class = "fas fa-stream"></i>
    <span>Grade</span>
  </a>`
}
${
  // Notas
  // Disponível para alunos
  getUsuarioLogado().eFuncionario ? ``
  : `
  <a href="/paginas/notas.html" ${window.location.pathname == "/paginas/notas.html" ? `class = "ativo"` : ``}>
    <i class="fa-solid fa-list"></i>
    <span>Notas</span>
  </a>`
}
<a href="/paginas/calendario.html" ${window.location.pathname == "/paginas/calendario.html" ? `class = "ativo"` : ``}>
  <i class = "fas fa-calendar"></i>
  <span>Calendário</span>
</a>
${
  // Lista de usuários
  // Disponível para funcionários
  getUsuarioLogado().eFuncionario ? `
  <a href="/paginas/usuarios.html" ${window.location.pathname == "/paginas/usuarios.html" ? `class = "ativo"` : ``}>
    <i class="fa-solid fa-list"></i>
    <span>Usuários</span>
  </a>`
  : ``
}
${
  // Fazer Matrícula
  // Disponível para funcionários
  getUsuarioLogado().eFuncionario ? `
  <a href="/paginas/cadastrarUsuario.html" ${window.location.pathname == "/paginas/cadastrarUsuario.html" ? `class = "ativo"` : ``}>
    <i class="fa-solid fa-address-card"></i>
    <span>Matrícula</span>
  </a>`
  : ``
}
<a href="/paginas/contato.html" ${window.location.pathname == "/paginas/contato.html" ? `class = "ativo"` : ``}>
  <i class = "fas fa-envelope"></i>
  <span>Contato</span>
</a>
`