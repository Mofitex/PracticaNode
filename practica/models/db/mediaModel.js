const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    titol: String,
    sinopsis: String,
    puntuacio: Number,
    Pelicula: Boolean
})

module.exports = mongoose.model('Media', mediaSchema)
