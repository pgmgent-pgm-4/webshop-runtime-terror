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
      this.profileLink = document.getElementById('profileLink');
      this.orderProfileLink = document.getElementById('orderProfileLink');
      this.wishlistLink = document.getElementById('wishlistLink')
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
      };
      if (this.profileLink !== null) {
        this.profileLink.addEventListener('click', (e) => {
          const login = localStorage.getItem('userId');
          this.profileLink.setAttribute('href', login !== null ? `/profile/${login}` : '/login')
        })
      }
      if (this.orderProfileLink !== null) {
        this.orderProfileLink.addEventListener('click', (e) => {
          const login = localStorage.getItem('userId');
          this.orderProfileLink.setAttribute('href', login !== null ? `/profile/${login}` : '/login')
        })
      }
      if (this.wishlistLink !== null) {
        this.wishlistLink.addEventListener('click', (e) => {
          const login = localStorage.getItem('userId');
          this.wishlistLink.setAttribute('href', login !== null ? `/profile/wishlist/${login}` : '/login')
        })
      }
    },
  };
  app.initialize();
})();

