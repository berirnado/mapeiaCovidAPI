const express = require(`express`);
const { body } = require(`express-validator/check`);

const userController = require(`../controllers/auth`);

const User = require(`../models/user`);

const router = express.Router();

router.put(`/signup`, [
    body(`phone`)
        .custom((value, {req}) => {
            return User.findOne({phone: value}).then(userDoc => {
                if (userDoc) {
                    return Promise.reject(`Telefone já utilizado!`);
                }
            })
        }),
    body(`username`)
        .not()
        .isEmpty(),
    body(`idade`)
        .not()
        .isEmpty()
],userController.signup);

module.exports = router;