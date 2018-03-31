const mongoose = require('mongoose');

const equipmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unit1: {
        type: String
    },
    unit2: {
        type: String
    },
    unit3: {
        type: String
    },
    unit4: {
        type: String
    },
    price: {
        type: String,
        required: true
    }
}) 

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = {Equipment}