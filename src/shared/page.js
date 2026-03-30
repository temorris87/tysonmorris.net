import headerHTML from '/components/header.html?raw';

document.getElementById('site-header').innerHTML = headerHTML;

// Mark the nav link active based on current path
const path = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') !== '/' && path.startsWith(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
