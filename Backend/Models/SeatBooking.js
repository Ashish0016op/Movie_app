const mongoose = require('mongoose');

const seatBookSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    BookedSeat: {
        type: [[Number]],
        default: []
    },
    Movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieDetail',
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    isPaymentSuccessful: {
        type: Boolean
    }
});

const SeatBookedModel = mongoose.model('SeatBooking', seatBookSchema);

module.exports = SeatBookedModel;
