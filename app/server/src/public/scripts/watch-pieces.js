const scrollMagicController = new ScrollMagic.Controller();

const scrollMagicScene = new ScrollMagic.Scene({
  triggerElement: '.home__quality',
  duration: 3000,
})
.setClassToggle('.scroll-magic-container__image', 'fade-in__watch-pieces')
.addTo(scrollMagicController)