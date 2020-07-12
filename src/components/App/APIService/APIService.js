import axios from 'axios';

export default class APIService {

    constructor() {
        this.apiKey = "109ff3545de4ef5f87dacbb3775a0e1f";
        this.baseURL = "https://api.openweathermap.org/data/2.5";
        this.iconBaseURL = "http://openweathermap.org/img/wn/";
        this.defaultCity = "Nice";
        this.weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }

    fetchApiData = (cityName, coords, callback) => {
        var todayWeather;
        var path;

        if (coords) {
            path = `${this.baseURL}/weather?appid=${this.apiKey}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`;
        } else {
            path = `${this.baseURL}/weather?appid=${this.apiKey}&q=${cityName ? cityName : this.defaultCity}&units=metric`;
        }
        
        axios.get(path)
            .then(res => {
                console.log(res);
                todayWeather = this.sanitizeDataWeather(res);
                return axios.get(`${this.baseURL}/onecall?appid=${this.apiKey}&lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=current&units=metric`);
            }).then(res => {
                console.log(res);
                callback({
                    todaySummary: todayWeather,
                    hourlyForecast: this.sanitizeForecast(res.data.hourly, true),
                    dailyForecast: this.sanitizeForecast(res.data.daily, false)
                });
            }).catch(error => console.log(error.response));
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

        return jsonData;
    }

    sanitizeForecast(json, currentDay) {
        var array = [];

        json.forEach(el => {
            const dateWeather = new Date(el.dt * 1000);
            var temp = el.temp.day ? el.temp.day : el.temp;

            array.push({
                currentTemp: Math.floor(temp * 1) / 1,
                weatherDesc: this.capitalize(el.weather[0].description),
                weatherIcon: this.iconBaseURL + el.weather[0].icon + "@2x.png",
                dayName: this.weekday[dateWeather.getDay()],
                hour: this.hourToDisplay(this.convertUTCDateToLocalDate(dateWeather)),
            })
        });

        if (currentDay) {
            return array.slice(0, 24);
        } else {
            return array.slice(1, 7);
        }

    }

    convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }
}
