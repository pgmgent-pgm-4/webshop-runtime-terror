(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.dropdownGeneral = document.getElementById('dropdown__general');
      this.dropdownShipping = document.getElementById('dropdown__shipping');
      this.detailGeneralInfo = document.querySelector('.detail__general__info');
      this.detailShippingInfo = document.querySelector('.detail__shipping__info');
      
    },
    registerEventListeners () {
      if (this.dropdownGeneral !== null) {
        this.dropdownGeneral.addEventListener('click', (e) => {
          this.detailGeneralInfo.classList.toggle('detail__specifications-open');
        });
      };

      if (this.dropdownShipping !== null) {
        this.dropdownShipping.addEventListener('click', (e) => {
          this.detailShippingInfo.classList.toggle('detail__specifications-open');
        });
      };

    },
  };
  app.initialize();
})();