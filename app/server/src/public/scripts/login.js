(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.$form = document.querySelector('#loginForm');
      this.$token = document.querySelector('#token');
      this.$userName = document.querySelector('#userName');
    },
    registerEventListeners () {
      if (this.$form !== null) {
        this.$form.onsubmit = async (e) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          const data ={
            username: formData.get('username'),
            password: formData.get('password'),
          };
          let response = await fetch('/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log(result.user.username);
          console.log(result.token);
          this.$token.innerHTML = result.token;
          this.$userName.innerHTML = result.user.username;

        }


      };
    },
  };
  app.initialize();
})();