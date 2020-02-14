const router = require('express').Router();
const authenticationController = require('../controllers/authenticationController');
const passport = require('passport');
require('../configs/passport');

const requireLogin = passport.authenticate('local', { session: false });

//authentication
router.post('/register', authenticationController.register);
router.post('/login', requireLogin, authenticationController.login);

module.exports = router;
