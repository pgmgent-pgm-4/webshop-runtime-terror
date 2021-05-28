(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.hamburgerButton = document.getElementById('hamburger-icon');

    },
    registerEventListeners () {
      if (this.hamburgerButton !== null) {
        this.hamburgerButton.addEventListener('click', (e) => {
          this.navOverlay.classList.add('nav-overlay--open');
          this.navOverlayBg.classList.add('nav-overlay__bg--open');
        });
      };
    },
  };
  app.initialize();
})();