const loginForm = document.querySelector('#login__form');
const loginInput = loginForm.querySelector('input[type="text"]');
const userName = document.querySelector('h1.username');
const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function showUserName (username) {
  userName.textContent = `Hello ${username}`;
  userName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName !== null) {
  showUserName(savedUserName);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showUserName(username);
  });
}