require('dotenv').config();
const Razorpay = require('razorpay');
const Order = require('../Models/Order');
const SeatBooking = require('../Models/SeatBooking');

exports.purchasePremium = async (req, res) => {
    try {
        console.log("price is",req.body.amount);
        const instance = new Razorpay({
            key_id: process.env.key_id,
            key_secret: process.env.key_secret,
        });

        const amount = req.body.amount*250*100; 
        const options = {
            amount: amount,
            currency: "INR",
            receipt: "order_rcptid_11",
        };

        instance.orders.create(options, async (err, rzpOrder) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error creating Order' });
            }

            try {
                await Order.create({
                    orderid: rzpOrder.id,
                    status: 'PENDING',
                });

                return res.status(201).json({ Order: rzpOrder, key_id: process.env.key_id });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error creating Order in DB' });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        console.log("body is", req.body);
        const { payment_id, order_id, BookedSeat, movieId, Email, Date, Time } = req.body;

        const updatedOrder = await Order.findOneAndUpdate(
            { orderid: order_id },
            { paymentid: payment_id, status: 'SUCCESS' },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        const seatBooked = new SeatBooking({
            price: 250,
            BookedSeat: BookedSeat,
            Movie: movieId, 
            Email: Email,
            Date: Date,
            Time: Time,
            isPaymentSuccessful: true,
        });
        await seatBooked.save();

        return res.status(202).json({ success: true, message: 'Transaction successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};
