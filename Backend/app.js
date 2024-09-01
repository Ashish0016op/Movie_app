require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
const MovieRoute=require('./Routes/Movie');
const SeatBookRoute=require('./Routes/SeatBook');
const PurchaseRoute=require('./Routes/Payment');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(MovieRoute);
app.use(SeatBookRoute);
app.use(PurchaseRoute);
const DB=process.env.MONGODB_URL;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("connection failed",err)
})


const port =process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("server is running on port ",port)
})