const mongoose = require("mongoose")

const tvshowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not Specified"
    },
    rating: {
        type: String,
        default: "Not Specified"
    }
});

const TVshow = mongoose.model("TVshow2",  tvshowSchema)

module.exports = TVshow