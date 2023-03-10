const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Users = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdm: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
mongoose.model('users', Users)