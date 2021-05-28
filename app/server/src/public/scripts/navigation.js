(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.hamburgerButton = document.getElementById('hamburger-icon');
      this.navOverlay = document.getElementById('nav-overlay');
      this.navOverlayBg = document.querySelector('.nav-overlay__bg');
    },
    registerEventListeners () {
      if (this.hamburgerButton !== null) {
        this.hamburgerButton.addEventListener('click', (e) => {
          console.log('click')
          // this.hamburgerButton.classList.toggle('open');
          this.navOverlay.classList.toggle('nav-overlay--open');
          this.navOverlayBg.classList.toggle('nav-overlay__bg--open');
        });
      }
    },
  };
  app.initialize();
})();