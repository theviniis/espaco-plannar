document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.depoimentos', {
    type   : 'loop',
    padding: {
      right: '30rem',
      left : '30rem',
    },
    pauseOnHover:true,
    pagination: false,
    gap: 140,
  } ).mount();
} );