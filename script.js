const btn = document.getElementById('darkModeBtn');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// MODAL
function abrirModal(titulo, texto) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = texto;
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}