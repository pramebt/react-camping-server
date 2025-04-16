//summon library
const express = require('express')
const cors = require('cors')
const app = express()
const campingRoute = require('./routes/camping')
//middleware
app.use(cors())
app.use(express.json())
//method GET,PUT,POST,PATCH,DELETE
// app.get('/',(req,res)=>{
//     console.log('hello backend world');
//     const text = "junior backend"
//     res.json({text})
// });
app.use('/api',campingRoute)
// app.get('/camping',(req,res)=>{
//     res.send('You are on camping now!')
// })

const PORT = 5000
app.listen(PORT,()=>console.log(`Server is Running now ${PORT}`))