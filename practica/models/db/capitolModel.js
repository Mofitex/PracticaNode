const mongoose = require('mongoose');

const capitolSchema = mongoose.Schema({
    titol: String,
    numero: Number,
    temporada: Number,
    serieId: String
})

module.exports = mongoose.model('Capitol', capitolSchema)
