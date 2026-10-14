// Mobile navigation shared by all portfolio pages.
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-navigation');
  if (!button || !nav) return;
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('is-open');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', close);
});
