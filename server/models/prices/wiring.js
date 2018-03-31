const mongoose = require('mongoose');

const wiringSchema = mongoose.Schema({
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

const Wiring = mongoose.model('Wiring', wiringSchema);

module.exports = {Wiring}