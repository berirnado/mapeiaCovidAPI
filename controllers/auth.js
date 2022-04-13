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
    const latlng = [latitude, longitude]

    console.log(latitude)
    console.log(longitude)
   
    
    const user = new User({
        phone: phone,
        latlng: latlng,
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

exports.login = (req, res, next) => {
    User.findOne({
        phone: req.body.phone
      }).catch(err => console.log(err))
        if (!User) {
            return res.send(500).message('Usuario nao encontrado')
        } else {
            return res.status(200).send({
                id: User._id,
                phone: User.phone,
              });
        }
}

exports.ListLatLng = (req, res, next) => {
    User.find({}, function(err, users) {
        var userMap = {};
    
        // users.forEach(function(user) {
        //   userMap[user._id] = (user);
        // });
    
        res.send(users.latlng);  
      });
}
