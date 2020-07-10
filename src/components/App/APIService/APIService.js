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


    sanitizeDataWeather(json) {
        var jsonData = {
            name: json.data.name,
            currentTemp: json.data.main.temp,
            weatherDesc: json.data.weather[0].description,
            weatherIcon: "http://openweathermap.org/img/wn/" + json.data.weather[0].icon + "@2x.png",
            country: json.data.sys.country
        };

        return JSON.stringify(jsonData);
    }

    sanitizeDataForecast(json) {
        const week = json.data.list;
        var weekData = [];

        for(var i = 0; i < 8; i++) {
            weekData.push(this.sanitizeOneDayForecast(week[i]));
        }

        return JSON.stringify(weekData);
    }

    sanitizeOneDayForecast (json) {
        const dateWeather = new Date(json.dt * 1000);
        const dateNow = new Date();
        var dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

        const datesAreOnSameDay = (first, second) =>
            first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();

        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }

        if(datesAreOnSameDay(dateWeather, dateNow)) {
            var dateToDisplay = "Today";
        } else if(dateTomorrow.getFullYear() == dateWeather.getFullYear() && dateTomorrow.getMonth() == dateWeather.getMonth() && dateTomorrow.getDate() == dateWeather.getDate()) {
            var dateToDisplay = "Tomorrow";
        } else {
            var dateToDisplay = this.weekday[dateWeather.getDay()];
        }

        var jsonData = {
            currentTemp: json.main.temp,
            weatherDesc: capitalize(json.weather[0].description),
            weatherIcon: "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png",
            dayToDisplay: dateToDisplay,
            hourToDisplay: this.hourToDisplay(dateWeather),
        };

        return jsonData;
    }
}
