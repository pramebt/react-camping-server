const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

exports.checkout = async(req,res) => {
    try{
        const { id } = req.body;
        
        const booking = await prisma.booking.findFirst({
            where:{
                id:Number(id)
            },
            include:{
                landmark:{
                    select:{
                        id: true,
                        secure_url: true,
                        title: true,
                    }
                }
            }
        })
        if(!booking){
            return renderError(400,'Booking Not Found')
        }
        const {total,totalNights,checkIn,checkOut,landmark} = booking;
        const {secure_url, title} = landmark;

        //stripe
        const session = await stripe.checkout.sessions.create({
            ui_mode: "embedded",
            line_items: [
                {
                    quantity: 1,
                    price_data:{
                        currency: "thb",
                        product_data: {
                            name: title,
                            images: [secure_url],
                            description: `Total Nights: ${totalNights}`,
                        },
                        unit_amount: total * 100, // Convert to cents
                    }
                },
            ],
            mode: "payment",
            return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
        });
        
    // console.log(total,totalNights,checkIn,checkOut,landmark,secure_url, title);
    res.send({ clientSecret: session.client_secret });
        //res.json({message: "Create Stripe Session Successfully!!!", result:session});
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
}