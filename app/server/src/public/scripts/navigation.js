(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.hamburgerButton = document.getElementById('hamburger-icon');
      this.hamburgerButtonClose = document.getElementById('hamburger-close');
      this.navOverlay = document.getElementById('nav-overlay');
      this.navOverlayBg = document.querySelector('.nav-overlay__bg');
      this.accesoiresDropdown = document.getElementById('accesoires-dropdown');
      this.accesoiresDropdownOptions = document.querySelector('.accesoires-dropdown__options');
    },
    registerEventListeners () {
      if (this.hamburgerButton !== null) {
        this.hamburgerButton.addEventListener('click', (e) => {
          this.navOverlay.classList.add('nav-overlay--open');
          this.navOverlayBg.classList.add('nav-overlay__bg--open');
        });
      };

      if (this.hamburgerButtonClose !== null) {
        this.hamburgerButtonClose.addEventListener('click', (e) => {
          this.navOverlay.classList.remove('nav-overlay--open');
          this.navOverlayBg.classList.remove('nav-overlay__bg--open');
        });
      };

      if (this.accesoiresDropdown !== null) {
        this.accesoiresDropdown.addEventListener('click', (e) => {
          this.accesoiresDropdownOptions.classList.toggle('accesoires-dropdown__options--open');
        });
      }
    },
  };
  app.initialize();
})();