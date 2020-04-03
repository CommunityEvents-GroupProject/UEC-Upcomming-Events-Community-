const router = require("express").Router()
const ApiController = require("../controllers/ApiController")


router.get("/movie-community/magelang", ApiController.getMoviesA)
router.get("/movie-community/banjar", ApiController.getMoviesB)
router.get("/movie-community/getWeatherA", ApiController.getWeatherA)
router.get("/movie-community/getWeatherB", ApiController.getWeatherB)


module.exports = router