const express = require("express")
const router = express.Router()
//constrollers
const {createProfile} = require("../controllers/profile")
//@endpoint http://localhost:5000/api/profile
router.post('/profile',createProfile)


module.exports = router