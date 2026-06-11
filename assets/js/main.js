const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const deviceTabs = document.querySelectorAll('.device-tab');
const messagePreview = document.getElementById('messagePreview');

deviceTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    deviceTabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const device = tab.dataset.device || 'device';
    if (messagePreview) {
      messagePreview.textContent = `Hi iTop, I need a repair for ${device}. Issue: screen replacement. Please confirm price, warranty option and availability.`;
    }
  });
});

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const type = data.get('type') || '';
    const model = data.get('model') || '';
    const service = data.get('service') || '';
    const warranty = data.get('warranty') || '';
    const details = data.get('details') || '';

    const message = [
      'Hi iTop, I want to make an enquiry.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Enquiry type: ${type}`,
      `Device / product: ${model || 'Not sure'}`,
      `Service needed: ${service}`,
      `Warranty preference: ${warranty}`,
      `Extra details: ${details || 'No extra details'}`,
      '',
      'Please confirm price, warranty, stock and availability. Thank you.'
    ].join('\n');

    const whatsappUrl = `https://wa.me/447760616466?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}
