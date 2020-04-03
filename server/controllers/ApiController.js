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

    static getWeatherA(req, res, next) {
        axios.get("/api.openweathermap.org/data/2.5/weather", {
            params: {
                "q": "magelang",
                "appid": "7d562bbf6d908d3b547e7f600cfddb79"
            }
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err);
        })
    }
    static getWeatherB(req, res, next) {
        axios.get(`/api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: "Banjar",
                appid: "7d562bbf6d908d3b547e7f600cfddb79"
            }
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err);
        })
    }

    static getNBAGames(req, res, next) {
        return axios.get("https://www.balldontlie.io/api/v1/games")
    }
}

module.exports = ApiController