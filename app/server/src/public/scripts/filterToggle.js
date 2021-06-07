(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.filterToggle = document.getElementById('filter-toggle');
      this.filter = document.querySelector('.filter');
      
    },
    registerEventListeners () {
      if (this.filterToggle !== null) {
        this.filterToggle.addEventListener('click', (e) => {
          this.filter.classList.toggle('filter--open');
        });
      };
    },
  };
  app.initialize();
})();