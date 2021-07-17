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

// Splide Quem Sou
  new Splide( '.quem-sou-img', {
    pagination: false,
    padding: {
      left: '16px'
    },
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }
  } ).mount();

// Splide Depoimentos
 new Splide( '.depoimentos', {
    easing: 'ease-in-out',
    focus: 'center',
    gap: '15ch',
    pagination: false,
	  perPage  : 2,
    start: 1,
	  trimSpace: false,
    type: 'slide',
    classes: {
      arrows: 'splide__arrows custom-arrows',
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
    }
  } ).mount();

  // Header Sticky
  window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
 
    let logo = document.querySelector(".logo img");
    if(window.scrollY > 0) {
      logo.src = "./img/logo.svg";
    } else {
      logo.src = "./img/logo-timbrado.svg";
    }
  });

} );



