
exports.createProfile = (req,res,next)=>{
    try{
        const {firstname,lastname} = req.body;
        console.log(req.headers.authorization)
        console.log(firstname, lastname)
        console.log('Hello Create Profile')
        res.json({message:'Hello create profile'})
    } catch (error){
        console.log(error.message)
        // throw new Error()
        // res.status(500).json({message:"Server Error"})\
        next(error)
    }
}