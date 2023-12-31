const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFood: String,
    image: String,
})

module.exports = mongoose.model("Cat", catSchema);