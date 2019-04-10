const mongoose = require('mongoose');

const capitolSchema = mongoose.Schema({
    titol: String,
    numero: Number,
    puntuacio: Number,
    serieId: Number
})

module.exports = mongoose.model('Capitol', capitolSchema)
