const express = require('express');
const router = express.Router();

//controllers
const { listCamping ,
     readCamping ,
      createCamping ,
       updateCamping ,
        deleteCamping} = require('../controllers/camping');

const { authCheck} = require('../middlewares/auth')

router.get('/camping',listCamping);

router.get('/camping/:id',readCamping)

router.post('/camping',authCheck,createCamping)

router.put('/camping/:id',updateCamping)

router.delete('/camping/:id',deleteCamping)

module.exports = router