//Ocultar a navbar quando sair da div principal, para que a nav não afete a navegação
document.addEventListener("DOMContentLoaded", function() {
  var topNav = document.querySelector('.top_nav');
  var fluidImgText = document.querySelector('.fluid-img_text');
  var isNavVisible = true;

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= fluidImgText.offsetTop) {
      if (isNavVisible) {
        topNav.classList.remove('visible');
        topNav.classList.add('invisible');
        isNavVisible = false;
      }
    } else {
      if (!isNavVisible) {
        topNav.classList.remove('invisible');
        topNav.classList.add('visible');
        isNavVisible = true;
      }
    }
  });
});


  // rolagem suave e remoção da barra de navegação lateral

document.addEventListener("DOMContentLoaded", function() {
  var topNav = document.querySelector('.top_nav');
  var isNavVisible = true;

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= window.innerHeight) {
      if (isNavVisible) {
        topNav.classList.remove('visible');
        topNav.classList.add('invisible');
        isNavVisible = false;
      }
    } else {
      if (!isNavVisible) {
        topNav.classList.remove('invisible');
        topNav.classList.add('visible');
        isNavVisible = true;
      }
    }
  });

  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});