const renderError = require("../utils/renderError")

exports.createProfile = (req,res,next)=>{
    try{
        if(true){
            return renderError(401,'Token invalid')
        }
        console.log('Hello Create Profile')
        res.json({message:'Hello create profile'})
    } catch (error){
        console.log(error.message)
        // throw new Error()
        // res.status(500).json({message:"Server Error"})\
        next(error)
    }
}