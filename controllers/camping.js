exports.listCamping = (req,res) =>{
    try{
        console.log('Hello controllers')
        console.log(asdsa)
    res.send('Hello controllers')
    } catch(error){
        // console.log(error.message)
        res.status(500).json({message:'Server Error'})
    }
    
};

exports.readCamping = (req,res)=>{
    try{
        res.send('Hello READ')
    } catch(error){
        res.status(500).json({message:'Server Error'})
    }
};

exports.createCamping = (req,res)=>{
    try{
        res.send('Hello Create')
    } catch(error){
        res.status(500).json({message:'Server Error'})
    }
};

exports.updateCamping = (req,res)=>{
    try{
        res.send('Hello Update')
    } catch(error){
        res.status(500).json({message:'Server Error'})
    }
};

exports.deleteCamping = (req,res)=>{
    try{
        res.send('Hello Delete')
    } catch(error){
        res.status(500).json({message:'Server Error'})
    }
};
