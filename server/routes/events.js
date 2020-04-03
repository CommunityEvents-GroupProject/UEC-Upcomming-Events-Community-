const router = require("express").Router()
const EventController = require("../controllers/EventController")
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.get("/events", EventController.findAll)
router.post("/events", EventController.create)



module.exports = router