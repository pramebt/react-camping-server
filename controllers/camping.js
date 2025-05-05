const prisma = require('../config/prisma')

exports.listCamping = async (req,res) =>{
    try{       
        const campings = await prisma.landmark.findMany();
        res.json({result:campings});
    } catch(error){
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
    }
    
};

exports.readCamping = async(req,res)=>{
    try{
        const {id} = req.params
        const camping = await prisma.landmark.findFirst({
            where:{
                id:Number(id) 
            }
        })
        res.json({result: camping})
    } catch(error){
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
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
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
    }
};

exports.updateCamping = (req,res)=>{
    try{
        res.send('Hello Update')
    } catch(error){
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
    }
};

exports.deleteCamping = (req,res)=>{
    try{
        res.send('Hello Delete')
    } catch(error){
        console.log(error.message)
        res.status(500).json({message:"Server Error"})
    }
};
