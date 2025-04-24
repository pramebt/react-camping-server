exports.authCheck = (req, res, next) => {
    try{
      console.log('Hello, Middleware')
      if(true){
            next()
      }else{
            res.status(401).json({message:"No access Denied!!"})
      }      
    } catch (error) {

    }
}