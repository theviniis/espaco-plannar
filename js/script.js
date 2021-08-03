document.addEventListener('DOMContentLoaded', function () {
// Simple Anime
AOS.init();

// Splide Banner
  new Splide( '.banner', {
    pagination: false,
    Height: true,
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }
  } ).mount();

// Splide Depoimentos
 new Splide( '.depoimentos', {
    easing: 'ease-in-out',
    focus: 'center',
    gap: '4rem',
    updateOnMove: true,
    pagination: false,
	  perPage  : 2,
    start: 1,
	  trimSpace: false,
    type: 'slide',
    classes: {
      arrows: 'splide__arrows custom-arrows',
    },
    breakpoints: {
      600: { 
      perPage: 1,
      }
    }
  } ).mount();
  
  // Splide servicos
  new Splide( '.servicos', {
    focus: 'center',
    start: 2,
    perPage: 3,
    gap: '10ch',
    pagination: false,
    updateOnMove: true,
    padding: {
      left: '30ch',
      right: '30ch'
    },
    classes: {
      arrows: 'splide__arrows custom-arrows',
    },
    breakpoints: {
      1600: {
        perPage: 3,
        padding: {
          left: '20ch',
          right: '20ch'
        }
      },
      1200: {
        perPage: 2,
      },
      900: {
        perPage: 1,
      },
      600: {
        type: 'loop',
        perPage: 1,
        padding: {
          left: '0',
          right: '0'
        }
      }
    }
  } ).mount();

  // Header Sticky
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Mobile Menu
  const mobileMenu = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".menu");  
  mobileMenu.addEventListener("click", function(){
    menu.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });

  // Modal
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelector(".investimento button");
  const modalClose = document.querySelector(".modal span")
  modalBtn.addEventListener("click", function(){
    modal.classList.add("is-active");
  });
  modalClose.addEventListener("click", function(){
    modal.classList.remove("is-active");
  });

} );



