class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint= document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
      this.container = document.querySelector('.container');
    }
  
    paint(weather) {
      this.location.textContent = weather.name;
      this.desc.textContent =weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1);
      this.string.textContent = Math.floor(weather.main.temp) + ' deg';
      this.icon.setAttribute('src','http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png');
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
      this.wind.textContent = `Wind Speed: ${Math.floor(weather.wind.speed)}m/s`;
      this.dewpoint.textContent = `DewPoint: ${weather.clouds.all} F`;
      this.feelsLike.textContent = ' ^_^ ';
      switch(weather.weather[0].main) {
                case 'Clear':
                this.container.style.backgroundImage = 'url("images/clear.jpg")';
                break;
                case 'Clouds':
                case 'Haze':
                this.container.style.backgroundImage = 'url("images/cloudy.jpg")';
                break;
                case 'Rain':
                case 'Drizzle':
                case 'Mist':
                this.container.style.backgroundImage = 'url("images/rain.jpg")';
                break;
                case 'Thunderstorm':
                this.container.style.backgroundImage = 'url("images/storm.jpg")';
                break;
                case 'Snow':
                this.container.style.backgroundImage = 'url("images/snow.jpg")';
                break;
      }
    }
  }