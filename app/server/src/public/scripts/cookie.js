const consentCookieTT = 'cookie_consent';

const showPopUp = () => !sessionStorage.getItem(consentCookieTT);
const addToStorage = () => sessionStorage.setItem(consentCookieTT, true);

window.onload = () => {
  const cookiePopUp = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept');

  acceptBtn.addEventListener('click', e => {
    addToStorage(sessionStorage);
    cookiePopUp.classList.add('hidden');
  })

  if (showPopUp()) {
    cookiePopUp.classList.remove('hidden');
  }
}

