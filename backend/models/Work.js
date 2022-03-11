const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    platform: [{
        type: String,
        required: true
    }],
    stack: [{
        type: String,
        required: true
    }],
    date: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    featuredTech: {
        type: String,
        required: true
    },
    filename: {
        type: String
    }
})

workSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Work', workSchema)