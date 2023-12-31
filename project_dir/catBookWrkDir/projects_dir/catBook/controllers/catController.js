const Cat = require('../models/catModel')
const multer = require('multer')

const getAllCats = async (req,res) => {
    try{
        const cats = await Cat.find()
        res.render('home', {cats: cats})
    }catch (e) {
        console.log(e)
    }
}
module.exports = {
    getAllCats
}