import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import image1 from "../../assets/PVR Cinemas_files/0(18).jpg";
import image2 from "../../assets/PVR Cinemas_files/12858_gwR2Ybnu.jpg";
import image3 from "../../assets/PVR Cinemas_files/Easydine Offer_Collates_Web banner_47950_ndxggmxh.jpg";
import image4 from "../../assets/Group 69.png";
import image5 from "../../assets/Group 18322-2.png";
import "./Banner.css";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import axios from "axios";
import "../../../src/styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [Movies, setMovies] = useState([]);
  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/get_Movie_details"
      );
      console.log("res", response.data.MovieDetails);
      const filteredMovie = response.data.MovieDetails.filter(
        (movie) => movie.isReleased == true
      );
      setMovies(filteredMovie);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  const images = [
    { Url: image1 },
    { Url: image2 },
    { Url: image3 },
    { Url: image4 },
  ];

  const slideProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
  };

  return (
    <>
      <div className="custom-slide-container">
        <Slide {...slideProperties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <img
                src={image.Url}
                className="banner_img"
                alt={`image${index + 1}`}
              />
            </div>
          ))}
        </Slide>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Movies.length == 0 ? (
          <div>Loading...</div>
        ) : (
          Movies.map((movie, index) => {
            return (
                <SwiperSlide key={index}>
                  <img src={movie.ImageURL} />
                  <p className="movie_name">{movie.Name}</p>
                  {activeIndex === index && (
                    <Link to={`/booking/${movie._id}`}>
                      <button className="slide_btn">Book Now</button>
                    </Link>
                  )}
                </SwiperSlide>
            );
          })
        )}
        
      </Swiper>
    </>
  );
};

export default Banner;
