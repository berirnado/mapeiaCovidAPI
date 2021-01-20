const { validationResult } = require(`express-validator/check`);

const User = require(`../models/user`);

exports.signup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const birthDate = req.body.birthDate
    const gender = req.body.gender;

};
