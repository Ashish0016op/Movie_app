import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import MovieCard from "../../components/Card/Card";
import { FaArrowRight } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import offerImage1 from "../../assets/DBS Bank.webp";
import offerImage2 from "../../assets/BOBCARD.webp";
import offerImage3 from "../../assets/IDBI_Bank.avif";
import offerImage4 from "../../assets/99BestSeller.avif";
import OfferCard from "../../components/Card/OfferCard";
import { Link } from "react-router-dom";
import axios from "axios";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";

const Home = () => {
  const OfferImages = [
    {
      Url: offerImage1,
      title: "DBS Bank Credit & Debit Card - 20% off on F&B",
      validDate: "Valid till: Thu, Oct 31, 2024",
    },
    {
      Url: offerImage2,
      title: "BOBCARD up to 10 % off* on F&B",
      validDate: "Valid till: Sat, Aug 31, 2024",
    },
    {
      Url: offerImage3,
      title: "IDBI Bank - 25% Off on Transactions",
      validDate: "Valid till: Mon, Sep 30, 2024",
    },
    {
      Url: offerImage4,
      title: "Best Sellers Starting at Rs 99",
      validDate: "Valid till: Mon, Sep 30, 2024",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState([]);
  const [commingMovies, setComingMovies] = useState([]);

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/get_Movie_details"
      );
      console.log("res", response.data.MovieDetails);
      const filteredCurrentMovies = response.data.MovieDetails.filter(
        (movie) => movie.isReleased === true
      );
      const filteredCommingMovies = response.data.MovieDetails.filter(
        (movie) => movie.isReleased === false
      );
      setCurrentMovies(filteredCurrentMovies);
      setComingMovies(filteredCommingMovies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Banner />
      <div>
        <div>
          <div className="c_box">
            <div>
              <p>Current Playing</p>
            </div>
            <Link to="/current_playing">
              <div className="S_box">
                <p>See More</p>
                <FaArrowRight />
              </div>
            </Link>
          </div>
          <div className="All_card">
            {currentMovies.slice(0, 4).map((Movie, index) => (
              <div key={index}>
                <MovieCard Details={Movie} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="c_box">
            <div>
              <p>Comming Soon</p>
            </div>
            <Link to="/coming_soon">
              <div className="S_box">
                <p>See More</p>
                <FaArrowRight />
              </div>
            </Link>
          </div>
          <div className="All_card">
            {commingMovies.slice(0, 4).map((movie, index) => (
              <div key={index}>
                <MovieCard Details={movie} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="c_box">
            <div>
              <p>Offer For You</p>
            </div>
            <div className="S_box">
              <p>See More</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="All_card">
            {OfferImages.map((image, index) => (
              <div key={index}>
                <OfferCard Details={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
        <BottomDrawer/>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
