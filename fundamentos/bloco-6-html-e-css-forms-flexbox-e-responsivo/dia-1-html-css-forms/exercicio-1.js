const envia = document.getElementById('envia');
const concordaImagens = document.getElementById('concorda-imagens');

envia.addEventListener('click', function (element) {
  if (concordaImagens.checked === false) {
  element.preventDefault();
  }
});