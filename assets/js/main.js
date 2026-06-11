
(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const forms = document.querySelectorAll('[data-whatsapp-form]');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const topic = form.getAttribute('data-form-topic') || 'Website enquiry';
      const lines = [`Hi iTop, I have a ${topic}.`];
      for (const [key, value] of data.entries()) {
        const clean = String(value || '').trim();
        if (!clean) continue;
        const label = key.replace(/[-_]/g,' ').replace(/\b\w/g, ch => ch.toUpperCase());
        lines.push(`${label}: ${clean}`);
      }
      lines.push('Please confirm price, stock, availability and warranty.');
      const message = encodeURIComponent(lines.join('\n'));
      window.open(`https://wa.me/447760616466?text=${message}`, '_blank', 'noopener');
    });
  });
})();
