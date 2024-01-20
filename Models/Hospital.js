const mongoose = require("mongoose")

const data = new mongoose.Schema({

    hospital_name: {
        type: String,
        required: true

    },

    hospital_Number: {
        type: String,
        required: true

    },
    hospital_email: {
        type: String,
        required: true,

    },
    room: {
        type: String,
        required: true,
    },
    bed: {
        type: String,
        required: true,
    },
    appointment: {
        type: String,
        required: true,
    },
    prescription: {
        type: String,
        required: true,
    },
    bill: {
        type: String,
        required: true,
    },
},{timestamp:true})
module.exports = mongoose.model("Forms", form)