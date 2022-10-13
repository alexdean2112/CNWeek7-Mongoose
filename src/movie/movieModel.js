const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
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

const Movie = mongoose.model("Movie2",  movieSchema)

module.exports = Movie