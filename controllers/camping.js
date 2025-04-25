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

exports.createCamping = (req,res)=>{
    try{
        res.send('Hello Create')
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
