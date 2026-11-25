const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
function closeMenu() {
  navMenu.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.navbar')) closeMenu(); });
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
const dialog = document.getElementById('projectDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogCaption = document.getElementById('dialogCaption');
document.querySelectorAll('[data-photo]').forEach(card => {
  card.addEventListener('click', () => {
    dialogImage.src = card.dataset.photo;
    dialogImage.alt = card.querySelector('img').alt;
    dialogCaption.textContent = card.dataset.caption;
    dialog.showModal();
  });
});
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.querySelector('.lightbox-figure').getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
