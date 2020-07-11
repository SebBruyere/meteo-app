export default class APIService {

    constructor() {
        this.apiKey = "109ff3545de4ef5f87dacbb3775a0e1f";
        this.apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather";
        this.apiUrlHourlyForecast = "https://api.openweathermap.org/data/2.5/forecast";

        this.apiUrlOneCall = "https://api.openweathermap.org/data/2.5/onecall";

        this.defaultCity = "Nice";
        this.weekday = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        };
    }

    getApiKey() {
        return this.apiKey;
    }

    getApiUrlWeather() {
        return this.apiUrlWeather;
    }
    getApiUrlHourlyForecast() {
        return this.apiUrlHourlyForecast;
    }
    getApiUrlOneCall() {
        return this.apiUrlOneCall;
    }
    getDefaultCity() {
        return this.defaultCity;
    }

    hourToDisplay(date) {
        var string = "";
        string += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        string += ":";
        string += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        return string;
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }


    sanitizeDataWeather(json) {

        var jsonData = {
            name: json.data.name,
            currentTemp: Math.floor(json.data.main.temp * 1) / 1,
            weatherDesc: this.capitalize(json.data.weather[0].description),
            weatherIcon: "http://openweathermap.org/img/wn/" + json.data.weather[0].icon + "@2x.png",
            country: json.data.sys.country
        };

        return JSON.stringify(jsonData);
    }


    sanitizeForecast (json) {
        const dateNow = new Date();
        var dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

        // Check if date now and
        const datesAreOnSameDay = (first, second) =>
            first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();

        var array = [];


        json.forEach(el => {
            const dateWeather = new Date(el.dt * 1000);
            var temp = el.temp.day ? el.temp.day : el.temp;
        
            array.push({
                currentTemp: Math.floor(temp * 1) / 1,
                weatherDesc: this.capitalize(el.weather[0].description),
                weatherIcon: "http://openweathermap.org/img/wn/" + el.weather[0].icon + "@2x.png",
                dayName: this.weekday[dateWeather.getDay()],
                hour: this.hourToDisplay(dateWeather),
            })
        });

        return array.slice(0, 24);
    }
}
