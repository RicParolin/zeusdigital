// script.js - Efeitos leves para Zeus Digital Innovation

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('section, .card, .comentario');
  const botoes = document.querySelectorAll('.btn-primary');
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const actions = document.querySelector('.actions');

  // Animação ao aparecer na tela
  const revelarAoScroll = () => {
    const topoPagina = window.scrollY + window.innerHeight * 0.85;
    elementos.forEach((el) => {
      if (el.offsetTop < topoPagina) {
        el.classList.add('revelado');
      }
    });
  };

  window.addEventListener('scroll', revelarAoScroll);
  revelarAoScroll(); // Revela os elementos logo ao carregar

  // Adiciona classe de efeito hover nos botões
  botoes.forEach((btn) => {
    btn.classList.add('hover-effect');
  });

  // Toggle do menu mobile
  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));

    menu.classList.toggle('active');
    actions.classList.toggle('active');
  });
});


// Rodapé - ano automático
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});