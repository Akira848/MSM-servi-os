// Obtém todos os elementos <details> na página
const detailsElements = document.getElementsByTagName('details');

// Adiciona um evento de clique a cada elemento <details>
for (let i = 0; i < detailsElements.length; i++) {
  detailsElements[i].addEventListener('click', function() {
    // Fecha os outros elementos <details> quando um é clicado
    for (let j = 0; j < detailsElements.length; j++) {
      if (i !== j) {
        detailsElements[j].removeAttribute('open');
      }
    }
  });
}