require("./db/connection");
const mongoose = require("mongoose")
const yargs = require("yargs")
const { createMovie, readMovies, updateMovie, deleteMovie } = require("./movie/movieFunctions")
const { createTV, readTV, updateTV, deleteTV } = require("./tvshow/tvshowFunctions")

const app = async (yargsObject) => {
    try {
        if (yargsObject.createMovie) {
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        }
        else if (yargsObject.readMovie) {
            console.log(await readMovies(yargsObject.key, yargsObject.filter))
        }   
        else if (yargsObject.updateMovie) {
            await updateMovie({[yargsObject.key]: yargsObject.value}, {[yargsObject.updateKey]: yargsObject.updateValue})
        }
        else if (yargsObject.deleteMovie) {
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating })
        }
        else if (yargsObject.createTV) {
            await createTV({ title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        }
        else if (yargsObject.readTV) {
            console.log(await readTV(yargsObject.key, yargsObject.filter))
        }   
        else if (yargsObject.updateTV) {
            await updateTV({[yargsObject.key]: yargsObject.value}, {[yargsObject.updateKey]: yargsObject.updateValue})
        }
        else if (yargsObject.deleteTV) {
            await deleteTV({ title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating })
        }
        else {
            console.log("Incorrect Command")
        }
        await mongoose.disconnect()
    }
    catch (error) {
        await mongoose.disconnect()
        console.log(error)
    }
}

app(yargs.argv)