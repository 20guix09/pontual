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


// Keep the menu in sync with the section visible beneath the sticky header.
const pageHeader = document.querySelector('.header');
const sectionLinks = [...navMenu.querySelectorAll('a[href^="#"]')];
const trackedSections = sectionLinks.map(link => ({
  link,
  section: document.getElementById(link.hash.slice(1))
})).filter(item => item.section);
let activeSection = null;
let scrollFramePending = false;
function updateScrollIndicators() {
  scrollFramePending = false;
  const page = document.documentElement;
  const maxScroll = Math.max(0, page.scrollHeight - page.clientHeight);
  const scrollTop = Math.max(0, Math.min(window.scrollY, maxScroll));
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  pageHeader.style.setProperty('--scroll-progress', String(progress));
  const readingLine = pageHeader.getBoundingClientRect().height + Math.min(140, window.innerHeight * .22);
  let current = trackedSections[0];
  for (const item of trackedSections) {
    if (item.section.getBoundingClientRect().top <= readingLine) current = item;
  }
  if (maxScroll > 0 && scrollTop >= maxScroll - 2) current = trackedSections.at(-1);
  if (!current || activeSection === current.section.id) return;
  activeSection = current.section.id;
  for (const item of trackedSections) {
    if (item === current) item.link.setAttribute('aria-current', 'location');
    else item.link.removeAttribute('aria-current');
  }
}
function scheduleScrollIndicators() {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(updateScrollIndicators);
}
window.addEventListener('scroll', scheduleScrollIndicators, { passive: true });
window.addEventListener('resize', scheduleScrollIndicators);
window.addEventListener('load', scheduleScrollIndicators);
window.addEventListener('pageshow', scheduleScrollIndicators);
window.addEventListener('hashchange', scheduleScrollIndicators);
if ('ResizeObserver' in window) {
  const pageSizeObserver = new ResizeObserver(scheduleScrollIndicators);
  pageSizeObserver.observe(document.body);
  pageSizeObserver.observe(pageHeader);
}
scheduleScrollIndicators();
