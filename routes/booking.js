const express = require("express")
const router = express.Router()
//constrollers
const { createBooking ,checkout} = require("../controllers/booking.js")
const { authCheck } = require("../middlewares/auth")
//@endpoint http://localhost:5000/api/booking
router.post('/booking',authCheck,createBooking)

router.post('/checkout',authCheck,checkout)
module.exports = router