const express=require('express');
const router=express.Router();
const SeatBookController=require('../Controllers/SeatBook');
router.post('/postSeatBooked',SeatBookController.PostSeatBooked);
router.get('/getSeatDetails/:id',SeatBookController.getSeatBookDetails);
module.exports=router;