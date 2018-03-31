const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    review: {
        type: String,
        default: 'n/a'
    },
    pages: {
        type: String,
        default: 'n/a'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    price: {
        type: String,
        default: 'n/a'
    },
    ownerId: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Article = mongoose.model('Article', articleSchema)

module.exports = {Article}