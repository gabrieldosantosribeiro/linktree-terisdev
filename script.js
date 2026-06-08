// ============================================================
//  CONFIGURAÇÃO DE LINKS
//  Altere apenas as URLs abaixo para atualizar os botões
// ============================================================
const LINKS = {
  portfolio: '#',
  linkedin: 'https://www.linkedin.com/in/gabriel-dos-santos-a951723b0/',
  whatsapp: 'https://wa.me/5511975656755?text=Olá!%20Vim%20pelo%20Instagram%20Teris%20Dev%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.',
};

// ============================================================
//  SCROLL ANIMATIONS
// ============================================================
function initAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

// ============================================================
//  SET LINKS
// ============================================================
function initLinks() {
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    if (LINKS[key]) el.setAttribute('href', LINKS[key]);
  });
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLinks();
  initAnimations();
});
