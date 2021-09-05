const loginForm = document.querySelector('#login__form');
const loginInput = loginForm.querySelector('input[type="text"]');
const userName = document.querySelector('h1.username');
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

function showUserName (username) {
  loginForm.classList.add('hidden');
  userName.textContent = `Hello ${username}`;
  userName.classList.remove('hidden');
}

if (savedUserName !== null) {
  showUserName(savedUserName);
} else {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginInputValue = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInputValue);
    showUserName(loginInputValue);
  });
}