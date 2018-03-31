const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    listTitle: {
        type: String
    },
    itemsService: {
        type: [{}]
    },
    nextSection: {
        type: [{}]
    },
    nextSection2: {
        type: [{}]
    },
    listSection: {
        type: [{}]
    }
})

const Home = mongoose.model('Home', homeSchema);

module.exports = {Home};