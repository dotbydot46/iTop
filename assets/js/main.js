const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function buildWhatsAppMessage(form) {
  const data = new FormData(form);
  const type = form.dataset.formType || 'enquiry';
  const lines = [];
  if (type === 'repair') lines.push('Hi iTop, I would like a repair quote.');
  else if (type === 'wholesale') lines.push('Hi iTop, I would like to ask about wholesale supply.');
  else if (type === 'business') lines.push('Hi iTop, I would like to ask about business customer support.');
  else lines.push('Hi iTop, I would like to make an enquiry.');
  for (const [key, value] of data.entries()) {
    if (!value) continue;
    const label = key.replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
    lines.push(`${label}: ${value}`);
  }
  return lines.join('\n');
}

document.querySelectorAll('[data-whatsapp-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = encodeURIComponent(buildWhatsAppMessage(form));
    window.open(`https://wa.me/447760616466?text=${text}`, '_blank', 'noopener');
  });
});
