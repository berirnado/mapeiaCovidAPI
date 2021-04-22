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
    const username = req.body.username;
    const idade = req.body.idade;
    const bairro = req.body.bairro;
    const rua = req.body.rua
    const numero = req.body.numero;

    
    const user = new User({
        phone: phone,
        username: username,
        idade: idade,
        bairro: bairro,
        rua: rua,
        numero: numero,
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
