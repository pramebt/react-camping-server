const express = require('express');
const router = express.Router();

//controllers
const { listCamping ,
     readCamping ,
      createCamping ,
       updateCamping ,
        deleteCamping} = require('../controllers/camping');

const { authCheck} = require('../middlewares/auth')
//@ENDPOINT http://localhost:5000/api/camping/2
//@METHODE GET [list]
//@ACCESS PUBLIC
router.get('/camping',authCheck,listCamping);
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE GET [read]
//@ACCESS PUBLIC
router.get('/camping/:id',readCamping)
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE POST [create]
//@ACCESS PRIVEATE
router.post('/camping', createCamping)
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE Put [edit]
//@ACCESS PRIVEATE
router.put('/camping/:id',updateCamping)
//@ENDPOINT http://localhost:5000/api/camping
//@METHODE DELETE [del]
//@ACCESS PRIVEATE
router.delete('/camping/:id',deleteCamping)

module.exports = router