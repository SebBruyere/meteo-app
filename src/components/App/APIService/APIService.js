export default class APIService {

    constructor() {
        this.apiKey = "109ff3545de4ef5f87dacbb3775a0e1f";
        this.apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather";
        this.apiUrlForecast = "https://api.openweathermap.org/data/2.5/forecast";
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
    getApiUrlForecast() {
        return this.apiUrlForecast;
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

    sanitizeDataForecast(json) {
        const forecast = json.data.list;

        const fullForecastData = {
            todayForecast: [],
            remainingForecast: []
        };

        for(var i = 0; i < 8; i++) {
            fullForecastData.todayForecast.push(this.sanitizeOneDayForecast(forecast[i]));
        }
        for( i = 8; i < 39; i++) {
            fullForecastData.remainingForecast.push(this.sanitizeOneDayForecast(forecast[i]));
        }

        return fullForecastData;
    }

    sanitizeOneDayForecast (json) {
        const dateWeather = new Date(json.dt * 1000);
        const dateNow = new Date();
        var dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

        const datesAreOnSameDay = (first, second) =>
            first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();

        if(datesAreOnSameDay(dateWeather, dateNow)) {
            var dateToDisplay = "Aujourd'hui";
        } else if(dateTomorrow.getFullYear() == dateWeather.getFullYear() && dateTomorrow.getMonth() == dateWeather.getMonth() && dateTomorrow.getDate() == dateWeather.getDate()) {
            var dateToDisplay = "Demain";
        } else {
            var dateToDisplay = this.weekday[dateWeather.getDay()];
        }

        var jsonData = {
            currentTemp: Math.floor(json.main.temp * 1) / 1,
            weatherDesc: this.capitalize(json.weather[0].description),
            weatherIcon: "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png",
            dayToDisplay: dateToDisplay,
            hourToDisplay: this.hourToDisplay(dateWeather),
        };

        return jsonData;
    }
}
