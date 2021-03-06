const API_KEY ='926a0260c1acfd38c0baa8b3c67d6077';

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('#weather .weather');
    const city = document.querySelector('#weather .city');
    const temp = document.querySelector('#weather .temp');
    temp.innerText = `${Math.floor(data.main.temp)}º`;
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}`;
  });
}

function onGeoError () {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);