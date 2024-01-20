const mongoose = require("mongoose")

const form = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },

    phone: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,

    },
    intrest: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
},{timestamp:true})
module.exports = mongoose.model("Forms", form)