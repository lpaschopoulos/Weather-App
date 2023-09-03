function getWeatherData(location) {
  const apiKey = "46d4256a3995995307c00400aac2d31f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        location: data.name,
      };
      return weatherData;
    });
}
function updateUI(weatherData) {
  const temperature = document.querySelector(".temp");
  const condition = document.querySelector(".desc");
  const location = document.querySelector(".input_text");

  temperature.textContent = `${weatherData.temperature}°C`;
  condition.textContent = weatherData.condition;
  location.textContent = weatherData.location;
}

const searchBtn = document.querySelector(".submit");
const searchBar = document.querySelector(".input_text");

searchBtn.addEventListener("click", () => {
  const location = searchBar.value;
  getWeatherData(location)
    .then(weatherData => {
      updateUI(weatherData);
    })
    .catch(error => {
      console.log(error);
    });
});

