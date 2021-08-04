document.addEventListener('DOMContentLoaded', function () {
// Simple Anime
AOS.init();

// Splide Banner
  new Splide( '.banner', {
    pagination: false,
    type: 'loop',
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
    type: 'loop',
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

  function toggleModal(){
    const overflow = document.body.style.overflow === 'hidden';
    modal.classList.toggle('is-active');
    overflow ? document.body.style.overflow='hidden' : document.body.style.overflow='initial';
  }

  modalBtn.addEventListener("click", toggleModal);
  modalClose.addEventListener("click", toggleModal);
  window.addEventListener("keydown",function(e){
    if (e.key === 'Escape' && modal.classList.contains('is-active')) { 
      return toggleModal();
    }
  });
  
  
  // create parallax effect on mouse movement
  window.onload = function() {
    var mainView = document.getElementById("apresentacao-passaro"),
        pSpeed = 1, // determines speed & distance of background-image travel
        _tmp = window
            .getComputedStyle(mainView, null)
            .backgroundPosition.trim()
            .split(/\s+/),
        positions = {
            x: _tmp[0],
            y: _tmp[1]
        },
        staticPercentX = parseInt(positions.x),
        staticPercentY = parseInt(positions.y);
  // On every mouse movement, grab mouse coordinates and pass them to the parallax function,
  // along with the starting background-position and parallax speed.
  window.onmousemove = function(e) {
      e = e || window.event;
      var x = e.clientX,
          y = e.clientY;

      mouseParallax(
          "apresentacao-passaro",
          staticPercentX,
          staticPercentY,
          x,
          y,
          pSpeed
      );
  };
};

function mouseParallax(id, percentX, percentY, mouseX, mouseY, speed) {
  var viewBackgroundImage = document.getElementById(id);

  var size = {
      width: window.innerWidth / 2 || document.body.clientWidth / 2,
      height: window.innerHeight / 2 || document.body.clientHeight / 2
  };

  var updatedXOffset = size.width - mouseX,
      updatedYOffset = size.height - mouseY,
      offsetX = updatedXOffset / size.width * speed,
      offsetY = updatedYOffset / size.height * speed;
  // 2D Parallax
  viewBackgroundImage.style.backgroundPositionX = offsetX + percentX + "%";
  viewBackgroundImage.style.backgroundPositionY = offsetY + percentY + "%";
  // 3D Parallax
  viewBackgroundImage.style.transform =
      "rotateX(" + offsetY * 10 + "deg) rotateY(" + offsetX * 10 + "deg)";
};

} );



