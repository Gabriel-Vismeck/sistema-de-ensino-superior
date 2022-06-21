document.getElementsByTagName("header")[0].innerHTML = 
`
<!--cabeçalho-->
<div class="botoes-header">
  <button onclick="toggle()" class="botao-sidebar">
    <i class="fa-solid fa-bars fa-2xl"></i>
  </button>
  <a href="/index.html">
    <img src="/img/logo.png" alt="logo" />
  </a>
</div>
<nav>
  <a href="/paginas/perfilUsuario.html">${getUsuarioLogado().nome}</a>
  <a href="/index.html" onclick="fazerLogout()">Logout</a>
</nav>
`