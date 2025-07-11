// Seleciona todos os links da nav
const nav = document.querySelector('.nav');
const links = nav.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Para o scroll no link clicado ficar centralizado na área visível
    link.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });
});