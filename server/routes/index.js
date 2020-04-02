const router = require('express').Router();
const events = require('./events');
const UserController = require('../controllers/UserController');
const apiRoute = require('./apiRoutes');

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.use(events);
router.use(apiRoute);



module.exports = router;