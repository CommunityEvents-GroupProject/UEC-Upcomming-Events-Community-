const router = require("express").Router()
const ApiController = require("../controllers/ApiController")


router.get("/movie-community/magelang", ApiController.getMoviesA)
router.get("/movie-community/banjar", ApiController.getMoviesB)



module.exports = router