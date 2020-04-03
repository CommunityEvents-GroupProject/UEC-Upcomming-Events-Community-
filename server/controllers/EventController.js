const { Event } = require("../models/index")
const ApiController = require("../controllers/ApiController")

class EventController {
    static findAll(req, res, next) {
        Event.findAll()
            .then(data => {
                return res.status(200).json({
                    events: data
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    static create(req, res, next) {

        ApiController.getMoviesA()
            .then(result => {
                const { data } = result
                // console.log(data[0]);
                for (let i = 0; i < data.length; i++) {
                    let name = `Nobar ${data[i].title}`
                    let location = "PLATINUM CINEPLEX ARTOS MALL, Magelang"
                    let status = true
                    let qty_members = 25
                    let schedule = new Date().toDateString() + " " + data[i].Jadwal.split("\n")[0]
                    let newData = {
                        name, location, status, qty_members, schedule
                    }
                    Event.create(newData)
                }
                return ApiController.getMoviesB()
                    .then(result => {
                        const { data } = result
                        for (let i = 0; i < data.length; i++) {
                            let name = `Nobar ${data[i].title}`
                            let location = "NSC Baninza Banjar"
                            let status = true
                            let qty_members = 25
                            let schedule = new Date().toDateString() + " " + data[i].Jadwal.split("\n")[0]
                            let newData = {
                                name, location, status, qty_members, schedule
                            }
                            Event.create(newData)
                        }

                    })
            })
            .then(success => {
                res.status(201).json(
                    {
                        success: `seeding success`
                    }
                )
            })
            .catch(err => {
                return next(err)
            })
    }

    
}


module.exports = EventController