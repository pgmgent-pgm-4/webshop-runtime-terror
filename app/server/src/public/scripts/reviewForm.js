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
      this.$form = document.getElementById('reviewForm');
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

      if (this.reviewFormClose !== null) {
        this.reviewFormClose.addEventListener('click', (e) => {
          this.reviewForm.classList.remove('detail__reviews__overlay--open');
          document.body.style.height = 'auto';
          document.body.style.overflow = 'auto';
        });
      };

      if (this.$form !== null) {
        this.$form.onsubmit = async (e) => {
          e.preventDefault();
          const path = window.location.pathname;
          const productId= this.splitter(path,'/', 2, 3)
          console.log(productId)
          const userId = localStorage.getItem('userId');
          let formData = new FormData(e.target);
          const data ={
            rating: formData.get('rating'),
            text: formData.get('review__text'),
            title: formData.get('review__title'),
            ProductId: parseInt(productId),
            UserId: parseInt(userId)
          };
          console.log('data', data);
          let response = await fetch('/api/reviews', {
            method: 'POST',
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let result = await response.json();
          console.log(result);
          this.reviewForm.classList.remove('detail__reviews__overlay--open');
          document.body.style.height = 'auto';
          document.body.style.overflow = 'auto';
        }
      }
      
      
    },
    splitter(string, divider, begin, end) {
      const tokens = string.split(divider).slice(begin, end);
      const result = tokens.join(divider);
      return result
    },
  };
  app.initialize();
})();