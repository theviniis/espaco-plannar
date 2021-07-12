

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.depoimentos', {
    easing: 'ease-in-out',
    // fixedWidth: '800px',
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



  // window.addEventListener("scroll",function(){
  //   var header = document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 0);
  // });

} );



