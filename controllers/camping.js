const prisma = require('../config/prisma')

exports.listCamping = (req,res,next) =>{
    try{
        console.log('Hello controllers')
        
    res.send('Hello controllers')
    } catch(error){
        // console.log(error.message)
        next(error)
    }
    
};

exports.readCamping = (req,res)=>{
    try{
        res.send('Hello READ')
    } catch(error){
        next(error)
    }
};

exports.createCamping = async(req,res)=>{
    try{
        console.log(req.body)
        const {title, description, price, category, lat, lng} = req.body
        const {id} = req.user
        const camping = await prisma.landmark.create({
            data:{
                title:title,
                description:description,
                price:price,
                category:category,
                lat:lat,
                lng:lng,
                profileId:id,
                
            }
        })
        res.json({message: "Create Camping Successfully!!!",
            result:camping
        })
    } catch(error){
        next(error)
    }
};

exports.updateCamping = (req,res)=>{
    try{
        res.send('Hello Update')
    } catch(error){
        next(error)
    }
};

exports.deleteCamping = (req,res)=>{
    try{
        res.send('Hello Delete')
    } catch(error){
        next(error)
    }
};
