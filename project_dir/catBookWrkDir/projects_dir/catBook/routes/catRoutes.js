const express = require("express")
const catController = require('../controllers/catController')
const router = express.Router()

router
    .route('/')
    .get(catController.getAllCats)
/*router
    .route('/upload')
    .get(catController.uploadPage)

router
    .route('/edit/:id')
    .get(catController.updateCat)

router
    .route('/edit/:id')
    .post(catController.deleteCat)
*/
module.exports = router