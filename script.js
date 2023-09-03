var cityInput = document.querySelector(".input_text");
var temperature = document.querySelector(".temp");
var description = document.querySelector('.desc');
var loc = document.querySelector('.name');
var button = document.querySelector('.submit');
var kelvin = 273.15;

button.addEventListener("click", () => {
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46d4256a3995995307c00400aac2d31f`)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      loc.innerHTML = "The weather in " + data.name + " is:"
      temperature.innerHTML = "Temperature: " + Math.floor(data.main.temp - kelvin) + "°C";
      description.innerHTML = "Description: " + data.weather[0].description;

    })
    .catch(error => {
      alert("Wrong city name!");
    });
});