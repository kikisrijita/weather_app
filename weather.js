class Weather {
    constructor(city) {
        this.apiKey = '7eec901c7ff2214101e1bf7c6ab8f011';
        this.city = city;
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
    }

    //Featch weather from API
    async  getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;
    }

    //change weather location
    changeLocation(city) {
        this.city = city
    }
}

//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22