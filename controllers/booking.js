const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");
exports.createBooking = async(req,res) => {
    try{
        
        //1 destructure the request body
        const { campingId ,checkIn, checkOut} = req.body;
        const { id } = req.user
        
        //2 delete booking
        await prisma.booking.deleteMany({
            where:{
                profileId:id,
                paymentStatus:false,  
            }
        })

        //3 find camping
        const camping = await prisma.landmark.findFirst({
            where: {
                id: campingId
            },
            select:{
                price: true
            }
        })
        if(!camping){
            return renderError(400,'Camping Not Found')
        }
        console.log(camping)
        //4 cal total price
        const {TotalPrice,TotalNights} = calTotal(camping.price,checkIn,checkOut)
        console.log(TotalPrice,TotalNights)
        //5 insert booking into database
        const booking = await prisma.booking.create({
            data:{
                profileId: id,
                landmarkId: campingId,
                checkIn: checkIn,
                checkOut: checkOut,
                total: TotalPrice,
                totalNights: TotalNights,
            }
        })
        console.log(booking);
        const bookingId = booking.id;
        //6 send id booking to react

        res.json({message: "Create Booking Successfully!!!", result:bookingId});
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
}

