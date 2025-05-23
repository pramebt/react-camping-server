const express = require("express")
const router = express.Router()
//constrollers

const { authCheck } = require("../middlewares/auth")
const { createImage } = require("../controllers/cloudinary")

router.post('/images',authCheck,createImage)


module.exports = router