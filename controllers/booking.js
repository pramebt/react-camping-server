
exports.createBooking = (req,res) => {
    try{
        console.log(req.body);
        res.json({message: "Create Booking Successfully!!!"});
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
}
