const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8f6f7ee78e6550f45f8a2b57508e6275&units=metric`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima
};