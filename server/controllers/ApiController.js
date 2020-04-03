const axios = require('axios')

class ApiController {
    static getMoviesA(req, res, next) {
        return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "https://jadwalnonton.com/bioskop/di-magelang/platinum-cineplex-artos-mall.html"
            }
        })
        //.then() dan .catch() ditangkap EventController.create()

    }
    static getMoviesB(req, res, next) {
        return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "https://jadwalnonton.com/bioskop/di-banjar/new-star-cineplex-nsc-banjar.html"
            }
        })

    }
    static getWeatherA(req,res, next){
        return axios.get(`api.openweathermap.org/data/2.5/weather?id=1636884&appid=${apikey}`, {
            params: {
                apikey: "7d562bbf6d908d3b547e7f600cfddb79",
                id: "api.openweathermap.org"
            }
        })
    }

    static getWeatherB(req,res, next){
        return axios.get(`api.openweathermap.org/data/2.5/weather?id=1650233&appid=${apikey}`, {
            params: {
                apikey: "7d562bbf6d908d3b547e7f600cfddb79",
                id: "api.openweathermap.org"
            }
        })
    }
}

module.exports = ApiController