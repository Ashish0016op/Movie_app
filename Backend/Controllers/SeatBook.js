
const SeatBookedModel=require('../Models/SeatBooking');
exports.PostSeatBooked=async(req,res,next)=>{
    try{
        const {price,BookedSeat,Movie,Email,Date,Time}=req.body;
        const res=new SeatBookedModel({
            price:price,
            BookedSeat:BookedSeat,
            Movie:Movie,
            Email:Email,
            Date:Date,
            Time:Time
        });
        await res.save();
        return res.status(200).json({"message":res});
    }catch(err){
        return res.status(401).json({"message":err});
    }
}
exports.getSeatBookDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("id is",id);
        const seatDetails = await SeatBookedModel.find({ Movie: id });
        if (!seatDetails) {
            return res.status(404).json({ "message": "Seat booking details not found" });
        }
        return res.status(200).json({ "message": seatDetails });
    } catch (err) {
        return res.status(500).json({ "message": err.message });
    }
};