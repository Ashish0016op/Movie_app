import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Booking.css";

const seats = Array.from({ length: 8 * 12 }, (_, i) => i);

const Booking = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [seatBooked, setSeatBooked] = useState([]);
  const [gmail, setEmail] = useState("");

  const isValidEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const getMovieDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/getSpecificMovie/${id}`);
      const seatRes = await axios.get(`http://localhost:4000/getSeatDetails/${id}`);
      setMovie(res.data.MovieDetail);
      console.log("seat booked is", seatRes.data.message);
      setSeatBooked(seatRes.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  const handleSelectedState = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleDateClick = (date) => setSelectedDate(date);
  const handleTimeClick = (time) => setSelectedTime(time);

  const handleBookTicket = async (e) => {
    e.preventDefault();

    try {
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat");
        return;
      }

      if (!isValidEmail(gmail)) {
        alert("Please enter a valid email address.");
        return;
      }

      const response = await axios.post("http://localhost:4000/pending_prem", {
        amount: selectedSeats.length
      });

      const options = {
        key: response.data.key_id,
        order_id: response.data.Order.id,
        amount: selectedSeats.length * 250 * 100,
        currency: "INR",
        name: movie.Name,
        description: "Movie Ticket Booking",
        handler: async function (paymentResponse) {
          try {
            await axios.post("http://localhost:4000/success_trans", {
              order_id: options.order_id,
              payment_id: paymentResponse.razorpay_payment_id,
              BookedSeat: selectedSeats,
              movieId: movie._id,
              Email: gmail,
              Date: selectedDate,
              Time: selectedTime,
            });

            alert("Congratulations on booking your seat!");
          } catch (error) {
            console.error("Transaction failed:", error);
            alert("There was an error processing your transaction. Please try again later.");
          }
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        console.error(response);
        alert("Payment failed. Please try again.");
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="img_box">
        <img src={movie.ImageURL} alt="Movie Banner" />
        <div className="text_overlay">
          <div className="img_overlay">
            <img src={movie.ImageURL} alt="Movie Banner" />
          </div>
          <div className="text_content_box">
            <h1>{movie.Name}</h1>
            <p>
              U/A
              <br />
              {movie.Durations}
              <br />
              {movie.ReleasedDate}
              <br />
              {movie.type}
              <br />
              {movie.Language}
            </p>
            <p>{movie.Description}</p>
          </div>
        </div>
      </div>

      <div className="seat_booking_box">
        <div>
          <p>Date</p>
        </div>
        <div className="date_btn">
          {["21", "22", "23", "24", "25", "26"].map((date) => (
            <button
              key={date}
              className={`d_btn ${selectedDate === date ? "selected" : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </button>
          ))}
        </div>
        <div>
          <p>Time</p>
        </div>
        <div className="date_btn">
          {["13:15", "18:15", "20:30", "22:30"].map((time) => (
            <button
              key={time}
              className={`d_btn ${selectedTime === time ? "selected" : ""}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="avl_book_sel_sections">
          <div className="availability_box">
            <p>Available</p>
          </div>
          <div className="availability_box">
            <p>Booked</p>
          </div>
          <div className="availability_box">
            <p>Selected</p>
          </div>
        </div>
      </div>

      <div className="Cinema">
        <div className="screen">
          <div className="title">Screen</div>
        </div>
        <div className="seats">
          {seats.map((seat) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = seatBooked.some((booked) =>
              booked.BookedSeat.flat().includes(seat)
            );
            return (
              <span
                key={seat}
                className={`seat ${isSelected ? "selected" : ""} ${
                  isOccupied ? "occupied" : ""
                }`}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
              />
            );
          })}
        </div>
      </div>

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        <span className="total">₹{selectedSeats.length * 250}</span>
      </p>

      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={gmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="book_button" onClick={handleBookTicket} disabled={!isValidEmail(gmail)}>
        Pay Now
      </button>
    </>
  );
};

export default Booking;
