//Packages...
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

//Pathes
const authController = require('../controllers/auth/authControllers');
const auth = require('../middlewares/auth');



const registerSchema =Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
})

const loginSchema =Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),

})

router.post('/register', validator.body(registerSchema), authController.controllers.postRegister);


router.post('/login', validator.body(loginSchema), authController.controllers.postLogin);

//Test Route (verify middleware is working)
router.get('/test', auth, (req, res) => {
    res.send('Request Passed');
});

module.exports = router; 