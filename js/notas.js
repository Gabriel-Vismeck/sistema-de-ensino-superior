// Pegar o usuario logado
let usuarioLogado = getUsuarioLogado();

for (let i = 0; i < usuarioLogado.notas.length; i++) {
    let notaMateria = document.getElementById("materia" + i);
    notaMateria.value = usuarioLogado.notas[i];
}