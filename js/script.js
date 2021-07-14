

document.addEventListener( 'DOMContentLoaded', function () {

  new Splide( '.banner', {
    // type: 'slide',
    pagination: false,
    clones:false,
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }

  } ).mount();


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



} );



