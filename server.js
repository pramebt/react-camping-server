//summon library
const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require("morgan")

const {readdirSync} = require('fs')
const handleError = require('./middlewares/error')

require('dotenv/config')
const {clerkMiddleware} = require("@clerk/express")
//-------------------------------------------------------------------*
// const campingRoute = require('./routes/camping')
// const profileRoute = require('./routes/profile')
//-------------------------------------------------------------------*
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(clerkMiddleware())
//method GET,PUT,POST,PATCH,DELETE



// console.log(readdirSync('./routes'))
readdirSync('./routes').map((r)=>
    app.use('/api',require('./routes/'+r))
);
//-------------------------------------------------------------------
// app.use('/api',campingRoute)
// app.use('/api',profileRoute)
//-------------------------------------------------------------------
app.use(handleError)
const PORT = 5000
app.listen(PORT,()=>console.log(`Server is Running now ${PORT}`))