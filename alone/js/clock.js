const h2El = document.querySelector('.clock h2');

function getClock () {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,'0');
  const minute = String(date.getMinutes()).padStart(2,'0');
  const seconds = String(date.getSeconds()).padStart(2,'0');
  h2El.textContent = `${hour}:${minute}:${seconds}`
}
getClock();
setInterval(getClock, 1000);