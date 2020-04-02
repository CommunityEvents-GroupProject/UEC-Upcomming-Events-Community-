const router = require("express").Router()
const EventController = require("../controllers/EventController")
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');




module.exports = router