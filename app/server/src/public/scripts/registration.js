(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.$form = document.querySelector('#registrationFrom');
    },
    registerEventListeners () {
      if (this.$form !== null) {
        // this.$form.addEventListener('submit', (e) => {
        //   e.preventDefault();
        //   const formData = new FormData(this.$form);
        //   this.user = {
        //     username: formData.get('username'), 
        //     email: formData.get('email'),
        //     password: formData.get('password')
        //   }
        //   console.log(this.user);
        // });

        // this.$form.onsubmit = async (e) => {
        //   e.preventDefault();
        //   let response = await fetch('/auth/register', {
        //     method: 'POST',
        //     body: new FormData(this.$form),
        //   });

        //   let result = await response.json();
        //   console.log(result);
        // }

        this.$form.addEventListener('submit', handleRegistrationFormSubmit)

      };
    },

    async handleRegistrationFormSubmit(e) {
      e.preventDefault();
      const formRegistration = e.currentTarget;
      const url = form.action;
      try {
        const formData = new FormData(formRegistration);
        const responseData = await postFormDataAsJson({url, formData});
        console.log({responseData})
      } catch (error) {
        console.error(error);
      }
    },
    async postFormDataAsJson({url, formData}) {
      const plainFormData = Object.fromEntries(formData.entries());
	    const formDataJsonString = JSON.stringify(plainFormData);
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: formDataJsonString, 
      };

      const response = await fetch(url, fetchOptions); 
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new error(errorMessage);
      }
      return response.json();
    }

  };
  app.initialize();
})();