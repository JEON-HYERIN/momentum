const API_KEY ='926a0260c1acfd38c0baa8b3c67d6077';

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url);
}

function onGeoError () {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);