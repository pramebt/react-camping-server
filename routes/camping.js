const express = require('express')
const router = express.Router()


//@ENDPOINT http://localhost:5000/api/camping/2
//@METHODE GET [list]
//@ACCESS PUBLIC
router.get('/camping',(req,res)=>{
    res.send('Hello route')
})
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE GET [read]
//@ACCESS PUBLIC
router.get('/camping/:id',(req,res)=>{
    res.send('Hello route')
})
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE POST [create]
//@ACCESS PRIVEATE
router.post('/camping',(req,res)=>{
    const {title,price} = req.body
    res.send("Hello post camping")
    console.log(title)
    console.log(price)
})
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE Put [edit]
//@ACCESS PRIVEATE
router.put('/camping/:id',(req,res)=>{
    res.send("Hello put camping")
    console.log(req.params.id)
})
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE DELETE [del]
//@ACCESS PRIVEATE
router.delete('/camping/:id',(req,res)=>{
    res.send("Hello DELETE")
})

module.exports = router