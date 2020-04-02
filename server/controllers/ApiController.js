const axios = require('axios')

class ApiController {
    static getMoviesA(req, res, next) {
        axios.get("https://rest.farzain.com/api/special/bioskop/bioskop.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "magelang"
            }
                .then(success => {
                    return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
                        params: {
                            apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                            id: "https://jadwalnonton.com/bioskop/di-magelang/platinum-cineplex-artos-mall.html"
                        }
                    })
                })
                .then(data => {
                    return res.status(200).json({
                        schedule: data
                    })
                })
                .cath(err => {
                    return next(err)
                })
        })

    }
    static getMoviesB(req, res, next) {
        axios.get("https://rest.farzain.com/api/special/bioskop/bioskop.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "banjar"
            }
                .then(success => {
                    return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
                        params: {
                            apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                            id: "https://jadwalnonton.com/bioskop/di-banjar/new-star-cineplex-nsc-banjar.html"
                        }
                    })
                })
                .then(data => {
                    return res.status(200).json({
                        schedule: data
                    })
                })
                .cath(err => {
                    return next(err)
                })
        })

    }
}

module.exports = ApiController