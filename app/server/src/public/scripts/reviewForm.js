(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.reviewFormOpen = document.getElementById('review__form__open__btn');
      this.reviewFormClose = document.getElementById('review__form_closing__btn');
      this.reviewForm = document.querySelector('.detail__reviews__overlay');
      
    },
    registerEventListeners () {
      if (this.reviewFormOpen !== null) {
        this.reviewFormOpen.addEventListener('click', (e) => {
          this.reviewForm.classList.add('detail__reviews__overlay--open');
          document.documentElement.scrollTop = 0;
          document.body.style.height = '100%';
          document.body.style.overflow = 'hidden';
        });
      };

      if (this.reviewFormOpen !== null) {
        this.reviewFormClose.addEventListener('click', (e) => {
          this.reviewForm.classList.remove('detail__reviews__overlay--open');
          document.body.style.height = 'auto';
          document.body.style.overflow = 'auto';
        });
      };
      
    },
  };
  app.initialize();
})();