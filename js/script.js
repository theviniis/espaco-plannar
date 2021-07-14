

document.addEventListener('DOMContentLoaded', function () {
const splideBanner = new Splide( '.banner', {
    type: 'slide',
    pagination: false,
    clones:false,
    gap: 0,
    focus:'center',
    classes: {
      arrows: 'splide__arrows custom-arrows',
    }
  } );
  splideBanner.mount();

  splideBanner.on('moved', function() {
    const list = document.querySelector('.splide__list');
    // const splideFirst = document.getElementById('splide01-slide01');
    // if(splideFirst.classList.includes('is-active')) return;
    // console.log('teste');
    let style = window.getComputedStyle(list);
    let matrix = new WebKitCSSMatrix(style.transform);
    const transform = matrix.m41
    list.style.transform = `translateX(${transform - 50}px)`;
  } );


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



