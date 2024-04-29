// script.js
document
  .getElementById('hamburger-menu')
  .addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('closed')) {
      navMenu.classList.remove('closed');
    } else {
      navMenu.classList.add('closed');
    }
  });
