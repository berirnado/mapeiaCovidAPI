const mongoose = require(`mongoose`)
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: {
        type: String,
        required: true,
    },
    latlng: {
        type: Array,
        required: true
    },
    genero: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model(`User`, userSchema);