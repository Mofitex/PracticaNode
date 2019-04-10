const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail: String,
    nom: String,
    password: String,
    direccion: String,
    cuenta: Number,
    admin: Boolean

})

module.exports = mongoose.model('User', userSchema)
