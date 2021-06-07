const timeline = gsap.timeline({defaults: { ease: 'power1.out' }});

timeline.to('.page-loader__text__hide__inner-text', {
  y: '0%',
  duration: 0.5, 
  stagger: 0.5
});

timeline.to('.page-loader__text__hide__inner-text--brandname', {
  y: '0%',
  duration: 1, 
  stagger: 0.25
});

timeline.to('.slider', {
  y: "-100%",
  duration: 1.5,
  delay: 0.5
});

timeline.to('.page-loader', {
  y: '-100%',
  duration: 1
},"-=1");

timeline.fromTo('.hero__title', {
  opacity: 0,
}, {
  opacity: 1,
})


const PageLoadCookieTT = 'page-loader';

const showPageLoad = () => !sessionStorage.getItem(PageLoadCookieTT);
const saveToStorage = () => sessionStorage.setItem(PageLoadCookieTT, true);


const cookiePageLoader = document.querySelector('.page-loader');
const cookiePageLoaderSlider = document.querySelector('.slider');

window.setTimeout(function() {
  cookiePageLoader.classList.add('hide-page-loader');
  cookiePageLoaderSlider.classList.add('hide-page-loader');
  saveToStorage(sessionStorage);
}, 7000);

// window.addEventListener('DOMContentLoaded', e => {
//   cookiePageLoader.classList.add('hide-page-loader');
//   cookiePageLoaderSlider.classList.add('hide-page-loader');
//   saveToStorage(sessionStorage);
// })

if (showPageLoad()) {
  cookiePageLoader.classList.remove('hide-page-loader');
  cookiePageLoaderSlider.classList.remove('hide-page-loader');
}

