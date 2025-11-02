// Seleciona os elementos
const showBtn = document.getElementById('show-note');
const secret = document.getElementById('secret');

// Mostra ou oculta a nota secreta
showBtn.addEventListener('click', () => {
  if (secret.style.display === 'none' || secret.style.display === '') {
    secret.style.display = 'block';
    showBtn.textContent = 'Ocultar nota';
  } else {
    secret.style.display = 'none';
    showBtn.textContent = 'Ler nota secreta';
  }
});
