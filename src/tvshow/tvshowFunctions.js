const TVshow = require("./tvshowModel")

exports.createTV = async (tvObject) => {
    try {
        await TVshow.create(tvObject)
    }
    catch (error) {
        console.log(error)
    }
}

exports.readTV = async (key, filter) => {
    try {
        if (key) {
            return await TVshow.find({[key]: filter})
        } else {
            return await TVshow.find({})
        }
    }
    catch (error) {
        console.log(error)
    }
}

exports.updateTV = async (filterObject, updateObject) => {
    try {
        await TVshow.updateOne(filterObject, {$set: updateObject})
    }
    catch (error) {
        console.log(error)
    }
}

exports.deleteTV = async (tvObject) => {
    try {
        await TVshow.deleteOne(tvObject)
    }
    catch (error) {
        console.log(error)
    }
}