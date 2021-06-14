(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.$form = document.querySelector('#registrationForm');
      this.$registrationButton = document.querySelector('#registrationButton')
    },
    registerEventListeners () {
      if (this.$form !== null) {
        this.$form.onsubmit = async (e) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          const data ={
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
          };
          console.log('data', data);
          let response = await fetch('/auth/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let result = await response.json();
          console.log(result);
        }


        this.$registrationButton.addEventListener('click', (e) => {
          window.history.back();
        });


      };
    },
  };
  app.initialize();
})();