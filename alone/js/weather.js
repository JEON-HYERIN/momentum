const API_KEY = '926a0260c1acfd38c0baa8b3c67d6077';


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('You live it',lat,lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('.weather .temperature');
    const city = document.querySelector('.weather .city');
    city.textContent = data.name;
    weather.textContent = `${data.main.temp} ${data.weather[0].main}`;
  });
} 

function onGeoError() {
  alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);