const mongoose = require('mongoose');

const lightingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unit1: {
        type: String
    },
    price: {
        type: String,
        required: true
    }
}) 

const Lighting = mongoose.model('Lighting', lightingSchema);

module.exports = {Lighting}