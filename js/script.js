document.addEventListener('DOMContentLoaded', function () {
// Splide Banner
  new Splide( '.banner', {
    pagination: false,
    cover: true,
    height: '85vh',
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }
  } ).mount();

// Splide Depoimentos
 new Splide( '.depoimentos', {
    easing: 'ease-in-out',
    focus: 'center',
    gap: '4rem',
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
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
 
    let logo = document.querySelector(".logo");
    if(window.scrollY > 0) {
      logo.src = "./img/logo.svg";
    } else {
      logo.src = "./img/logo-timbrado.svg";
    }
  });

} );



