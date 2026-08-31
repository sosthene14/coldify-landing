// Import translator
import translator from './i18n/translator.js';

// Intersection Observer for scroll reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Translation function
function translatePage() {
  // Translate simple elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = translator.translate(key);
    
    if (el.tagName === 'TITLE') {
      document.title = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Translate lists (ul with data-i18n-list attribute)
  document.querySelectorAll('[data-i18n-list]').forEach((ul) => {
    const key = ul.getAttribute('data-i18n-list');
    const items = translator.translate(key);
    
    if (Array.isArray(items)) {
      const listItems = ul.querySelectorAll('li');
      items.forEach((text, index) => {
        if (listItems[index]) {
          // Keep the ::before pseudo-element, only replace text content
          listItems[index].textContent = text;
        }
      });
    }
  });

  // Translate SVG text elements
  document.querySelectorAll('[data-i18n-svg]').forEach((textEl) => {
    const key = textEl.getAttribute('data-i18n-svg');
    const translation = translator.translate(key);
    textEl.textContent = translation;
  });

  // Update html lang attribute
  document.documentElement.lang = translator.getCurrentLocale();
  
  // Initialize Lucide icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Update active button state based on current locale
function updateActiveButton() {
  const currentLocale = translator.getCurrentLocale();
  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    if (btn.getAttribute('data-lang') === currentLocale) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Language toggle functionality
document.querySelectorAll('.lang-toggle button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const locale = btn.getAttribute('data-lang');
    
    if (locale && locale !== translator.getCurrentLocale()) {
      // Change locale (this will save to localStorage automatically)
      translator.setLocale(locale);
      
      // Update UI immediately
      updateActiveButton();
      translatePage();
    }
  });
});

// Listen for locale changes
translator.onChange((locale) => {
  updateActiveButton();
});

// Initial setup: translate page and set correct button state
updateActiveButton();
translatePage();
