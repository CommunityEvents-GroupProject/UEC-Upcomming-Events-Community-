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
}

module.exports = ApiController