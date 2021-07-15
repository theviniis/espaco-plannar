document.addEventListener('DOMContentLoaded', function () {


  const splideDepoimentos = new Splide( '.depoimentos', {
    easing: 'ease-in-out',
    focus: 'center',
    gap: '15ch',
    pagination: false,
	  perPage  : 2,
    start: 1,
	  trimSpace: false,
    type: 'slide',
    padding: {
      right: '2rem'
    },
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }
  } );
  splideDepoimentos.mount();
  
new Splide( '.banner', {
      perPage  : 1,
      pagination: false,
      cover: true,
      center: true,
      height: '85vh',
      classes: {
              arrows: 'splide__arrows custom-arrows',
      }
    } ).mount();
} );



