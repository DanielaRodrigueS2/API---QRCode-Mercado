const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const {body} = require('express-validator');

router.post('/register', [
    body('nome').notEmpty(),
    body("email").isEmail(),
    body('senha').isLength({min: 6, max: 30})
], UserController.register);

router.post('/login', UserController.login);


module.exports = router;