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