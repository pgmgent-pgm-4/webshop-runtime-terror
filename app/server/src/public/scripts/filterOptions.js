(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.filterOptionColors = document.getElementById('filter-option-colors');
      this.filterOptionColorsList = document.querySelector('.filter-option-colors-list');
      this.filterOptionBrands = document.getElementById('filter-option-brands');
      this.filterOptionBrandsList = document.querySelector('.filter-option-brands-list');
      this.filterOptionPrice = document.getElementById('filter-option-price');
      this.filterOptionPriceContainer = document.querySelector('.filter-option-price-container');
      
    },
    registerEventListeners () {
      if (this.filterOptionColors !== null) {
        this.filterOptionColors.addEventListener('click', (e) => {
          this.filterOptionColorsList.classList.toggle('filter-option-colors-list-open');
        });
      };
      if (this.filterOptionBrands !== null) {
        this.filterOptionBrands.addEventListener('click', (e) => {
          this.filterOptionBrandsList.classList.toggle('filter-option-open');
        });
      };
      if (this.filterOptionPrice !== null) {
        this.filterOptionPrice.addEventListener('click', (e) => {
          this.filterOptionPriceContainer.classList.toggle('filter-option-price-container-open');
        });
      };

    },
  };
  app.initialize();
})();