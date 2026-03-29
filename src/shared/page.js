import { setYear } from './utils.js';
import headerHTML from '/components/header.html?raw';
import footerHTML from '/components/footer.html?raw';

document.getElementById('site-header').innerHTML = headerHTML;
document.getElementById('site-footer').innerHTML = footerHTML;

setYear();

// Mark the nav link active based on current path
const path = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') !== '/' && path.startsWith(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
