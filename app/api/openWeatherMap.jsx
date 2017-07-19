var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2e181d71edbf60579ffc1a2ab41bb211&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {            
            if (res.cod && res.message) {
                debugger;
                throw new Error(res.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {            
            throw new Error(res.response.data.message);
        });
    }
}