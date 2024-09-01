const mongoose=require('mongoose');
const Order=new mongoose.Schema({
    paymentid:{
        type:String
    },
    orderid:{
        type:String
    },
    status:{
        type:String
    },
    
})

module.exports=mongoose.model('order',Order);