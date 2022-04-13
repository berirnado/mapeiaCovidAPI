const { validationResult } = require(`express-validator/check`);


const User = require(`../models/user`);

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error(`Validation failed.`)
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const phone = req.body.phone;
    const genero = req.body.genderValue
    const birthday = req.body.birthday
    const latitude = req.body.latitude
    const longitude = req.body.longitude

    console.log(latitude)
    console.log(longitude)
   
    
    const user = new User({
        phone: phone,
        latitude: latitude,
        longitude: longitude,
        genero: genero,
        birthday: birthday,
    });
    return user.save()
    .then(result => {
        res.status(201).json({message: `User Created`, userId: result._id})
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })

};
