const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    innerContent: {
        type: [String]
    },
    miniature1: {
        type: String
    },
    titleInner1: {
        type: String
    },
    listInner1: {
        type: [{}]
    },
    miniature2: {
        type: String
    },
    innerContent2: {
        type: String
    },
    frontList: {
        type: String
    },
    listInner2: {
        type: [{}]
    },
    postList1: {
        type: String
    },
    titleInner2: {
        type: String
    },
    innerContent3: {
        type: String
    },
    listInner3: {
        type: [{}]
    },
    miniature3: {
        type: String
    },
    postList2: {
        type: [{}]
    },
    titleInner3: {
        type: String
    },
    innerContent4: {
        type: [{}]
    },
    miniature4: {
        type: String
    },
    titleInner4: {
        type: String
    },
    innerContent5: {
        type: [{}]
    },
    miniature5: {
        type: String
    },
    titleInner5: {
        type: String
    },
    innerContent6: {
        type: [{}]
    },
    titleInner6: {
        type: String
    },
    innerContent7: {
        type: [{}]
    },
    innerContent8: {
        type: [{}]
    },
    titleInnerDop: {
        type: String
    }
})

const Slider = mongoose.model('Slider', sliderSchema)

module.exports = {Slider}
