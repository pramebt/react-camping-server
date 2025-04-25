const renderError = require("../utils/renderError")

exports.createProfile = (req,res,next)=>{
    try{
        const {firstname,lastname,clerkid} = req.body;
        if(true){
            return renderError(400,"jufsfsfsfsf")
        }
        console.log(firstname, lastname,clerkid)
        console.log('Hello Create Profile')
        res.json({message:'Hello create profile'})
    } catch (error){
        console.log(error.message)
        // throw new Error()
        // res.status(500).json({message:"Server Error"})\
        next(error)
    }
}