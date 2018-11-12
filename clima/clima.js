const axios = require('axios');

const getClima = async(lat, lng) => {
    let keyOpenWeather = 'KEY'
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${keyOpenWeather}`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}