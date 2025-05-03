const prisma = require('../config/prisma')
exports.createProfile = async(req,res,next)=>{
    try{
        const {firstname,lastname} = req.body;
        const { id } = req.user;
        const email = req.user.emailAddresses[0].emailAddress
        
        // const profile = await prisma.profile.create({
        //     data:{
        //         firstname: firstname,
        //         lastname: lastname,
        //         clerkId: id,
        //         email
        //     }
        // })
        const profile = await prisma.profile.upsert({
            where:{ clerkId : id },
            create:{
                firstname,
                lastname,
                email,
                clerkId : id
            },
            update:{
                firstname,
                lastname,
                email
            }
        })
        
        console.log(firstname, lastname ,id,email)
        console.log('Hello Create Profile')
        res.json({result:profile, message:'create profile'})
    } catch (error){
        console.log(error.message)

        next(error)
    }
}