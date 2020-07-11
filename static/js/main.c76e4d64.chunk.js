(this["webpackJsonpmeteo-app"]=this["webpackJsonpmeteo-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(69)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),l=(a(30),a(24)),i=(a(31),a(3)),s=a(4),u=a(7),m=a(6),h=a(5);a(32);var y=function(e){return n.a.createElement("div",{className:"component-search-input"},n.a.createElement("input",{onKeyDown:e.keydown}))};var p=function(e){return n.a.createElement("div",{className:"mt-5"},n.a.createElement("h1",null,e.todaySummary.name,"\xa0",e.todaySummary.country?"("+e.todaySummary.country+")":""),n.a.createElement("h1",null,e.todaySummary.currentTemp?e.todaySummary.currentTemp+"\xb0":""),n.a.createElement("h1",null,e.todaySummary.weatherDesc),n.a.createElement("img",{className:"",src:e.todaySummary.weatherIcon?e.todaySummary.weatherIcon:""}))};a(33),a(34);var d=function(e){return n.a.createElement("div",{className:""},n.a.createElement("h5",null,e.todayForecast.hour),n.a.createElement("img",{className:"",src:e.todayForecast.weatherIcon?e.todayForecast.weatherIcon:"",alt:"Weather Icon"}),n.a.createElement("h4",null,e.todayForecast.currentTemp?e.todayForecast.currentTemp+"\xb0":""))},f=a(8),g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todayForecast,t=[];return e.length&&(t=e.map((function(e,t){return n.a.createElement("div",{className:"wrapper-thumbnail mt-2 mb-5 ml-2 mr-2 col-xs-12 text-center"},n.a.createElement(d,{key:t.toString(),todayForecast:e}))}))),n.a.createElement("div",{className:"container"},n.a.createElement(f.a,{className:"scroll-container"},n.a.createElement("div",{className:"row flex-nowrap wrapper-smallthumbnail"},t)))}}]),a}(n.a.Component),w=(a(37),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleKeyDown=r.handleKeyDown.bind(Object(u.a)(r)),r.state={city:r.props.city,weatherInfo:null,error:!1},r}return Object(s.a)(a,[{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.props.handleEnter(e.target.value)}},{key:"render",value:function(){var e=this.props.todaySummary,t=this.props.hourlyForecast;return console.log(e),n.a.createElement("div",{className:"component-sidebar"},n.a.createElement("h1",{className:"mb-5"},"Today's weather"),n.a.createElement(y,{city:this.state.city,keydown:this.handleKeyDown}),n.a.createElement(p,{todaySummary:e}),n.a.createElement(g,{todayForecast:t}))}}]),a}(n.a.Component));a(38),a(39);var v=function(e){return n.a.createElement("div",{className:""},n.a.createElement("h4",null,e.forecastData.currentTemp?e.forecastData.currentTemp+"\xb0":""),n.a.createElement("p",null,e.forecastData.weatherDesc),n.a.createElement("img",{className:"",src:e.forecastData.weatherIcon?e.forecastData.weatherIcon:"",alt:"Weather Icon"}),n.a.createElement("h4",null,e.forecastData.dayName),n.a.createElement("h5",null,e.forecastData.hour))},E=(a(40),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.forecastData,t=[];return e.length&&(t=e.map((function(e,t){return n.a.createElement("div",{className:"wrapper-thumbnail mt-2 mb-2 ml-2 mr-2 col-xs-12 col-md-6 col-lg-3 col-xl-2 text-center"},n.a.createElement(v,{key:t.toString(),forecastData:e}))}))),n.a.createElement("div",{className:"component-forecast"},n.a.createElement("h1",{className:"text-center"},"Forecast"),n.a.createElement("div",{className:"container"},n.a.createElement(f.a,{className:"scroll-container"},n.a.createElement("div",{className:"row flex-nowrap"},t))))}}]),a}(n.a.Component)),D=function(){function e(){Object(i.a)(this,e),this.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},this.apiKey="109ff3545de4ef5f87dacbb3775a0e1f",this.apiUrlWeather="https://api.openweathermap.org/data/2.5/weather",this.apiUrlHourlyForecast="https://api.openweathermap.org/data/2.5/forecast",this.apiUrlOneCall="https://api.openweathermap.org/data/2.5/onecall",this.defaultCity="Nice",this.weekday={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}}return Object(s.a)(e,[{key:"getApiKey",value:function(){return this.apiKey}},{key:"getApiUrlWeather",value:function(){return this.apiUrlWeather}},{key:"getApiUrlHourlyForecast",value:function(){return this.apiUrlHourlyForecast}},{key:"getApiUrlOneCall",value:function(){return this.apiUrlOneCall}},{key:"getDefaultCity",value:function(){return this.defaultCity}},{key:"hourToDisplay",value:function(e){var t="";return t+=e.getHours()<10?"0"+e.getHours():e.getHours(),t+=":",t+=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}},{key:"sanitizeDataWeather",value:function(e){return{name:e.data.name,currentTemp:Math.floor(1*e.data.main.temp)/1,weatherDesc:this.capitalize(e.data.weather[0].description),weatherIcon:"http://openweathermap.org/img/wn/"+e.data.weather[0].icon+"@2x.png",country:e.data.sys.country}}},{key:"sanitizeForecast",value:function(e){var t=this,a=new Date,r=(new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),[]);return e.forEach((function(e){var a=new Date(1e3*e.dt),n=e.temp.day?e.temp.day:e.temp;r.push({currentTemp:Math.floor(1*n)/1,weatherDesc:t.capitalize(e.weather[0].description),weatherIcon:"http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",dayName:t.weekday[a.getDay()],hour:t.hourToDisplay(t.convertUTCDateToLocalDate(a))})})),r.slice(0,24)}},{key:"convertUTCDateToLocalDate",value:function(e){var t=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),a=e.getTimezoneOffset()/60,r=e.getHours();return t.setHours(r-a),t}}]),e}(),b=a(11),N=a.n(b),F=(a(68),new D);var k=function(){var e,t=Object(r.useState)({loading:!1,todaySummary:[],hourlyForecast:[],dailyForecast:[],city:null}),a=Object(l.a)(t,2),c=a[0],o=a[1];return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"}),n.a.createElement("body",{className:"App-body"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-4 mt-3 mb-3 text-center"},n.a.createElement(w,{city:c.city,todaySummary:!!c.todaySummary&&c.todaySummary,hourlyForecast:!!c.hourlyForecast&&c.hourlyForecast,handleEnter:function(t){N.a.get("".concat(F.getApiUrlWeather(),"?appid=").concat(F.getApiKey(),"&q=").concat(t,"&units=metric&lang=fr")).then((function(t){return console.log(t),e=F.sanitizeDataWeather(t),N.a.get("".concat(F.getApiUrlOneCall(),"?appid=").concat(F.getApiKey(),"&lat=").concat(t.data.coord.lat,"&lon=").concat(t.data.coord.lon,"&exclude=current&units=metric&lang=fr"))})).then((function(t){console.log(t),o({todaySummary:e,hourlyForecast:F.sanitizeForecast(t.data.hourly),dailyForecast:F.sanitizeForecast(t.data.daily)})})).catch((function(e){return console.log(e.response)}))}})),n.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-8 mt-3 mb-3"},n.a.createElement(E,{city:c.city,forecastData:!!c.dailyForecast&&c.dailyForecast}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c76e4d64.chunk.js.map