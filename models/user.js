const mongoose = require(`mongoose`)
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    idade: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    rua: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model(`User`, userSchema);