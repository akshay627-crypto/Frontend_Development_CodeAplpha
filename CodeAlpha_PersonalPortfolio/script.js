const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  siteNav.classList.remove('is-open');
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
    menuToggle.focus();
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
document.querySelector('#year').textContent = String(new Date().getFullYear());

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const contactAddress = 'your.email@example.com';

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const fields = new FormData(contactForm);
  const subject = `Portfolio contact from ${fields.get('name')}`;
  const body = `${fields.get('message')}\n\nFrom: ${fields.get('name')} (${fields.get('email')})`;
  window.location.href = `mailto:${contactAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = `Your email app should open. Replace ${contactAddress} in script.js with your address.`;
});
