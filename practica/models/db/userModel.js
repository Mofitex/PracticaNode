const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail: String,
    nom: String,
    password: String,
    direccion: String,
    n_cuenta: Number,
    tipus: String

})

module.exports = mongoose.model('User', userSchema)
