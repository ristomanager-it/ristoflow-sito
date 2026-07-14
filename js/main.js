// Menu mobile: apre/chiude la navbar aggiungendo .nav-mobile-open (regola già nel CSS)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navbar = document.querySelector('.navbar');
  if (!toggle || !navbar) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    navbar.classList.toggle('nav-mobile-open');
  });

  // chiudi toccando una voce del menu
  navbar.querySelectorAll('.nav-links a, .nav-cta a').forEach(function (link) {
    link.addEventListener('click', function () {
      navbar.classList.remove('nav-mobile-open');
    });
  });

  // chiudi toccando fuori dalla navbar
  document.addEventListener('click', function (e) {
    if (navbar.classList.contains('nav-mobile-open') && !navbar.contains(e.target)) {
      navbar.classList.remove('nav-mobile-open');
    }
  });
});
