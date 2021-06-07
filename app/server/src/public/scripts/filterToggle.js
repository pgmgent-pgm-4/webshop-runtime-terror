(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.filterToggle = document.getElementById('filter-toggle');
      this.filterClose = document.getElementById('filter-close');
      this.filter = document.querySelector('.filter');
      this.filterOverlay = document.querySelector('.filter-overlay');
      
    },
    registerEventListeners () {
      if (this.filterToggle !== null) {
        this.filterToggle.addEventListener('click', (e) => {
          this.filter.classList.add('filter--open');
          this.filterOverlay.classList.add('filter--open');
          document.documentElement.scrollTop = 0;
          document.body.style.height = '100%';
          document.body.style.overflow = 'hidden';
        });
      };
      if (this.filterClose !== null) {
        this.filterClose.addEventListener('click', (e) => {
          this.filter.classList.remove('filter--open');
          this.filterOverlay.classList.remove('filter--open');
          document.documentElement.scrollTop = 0;
          document.body.style.height = 'auto';
          document.body.style.overflow = 'auto';
        });
      };
    },
  };
  app.initialize();
})();