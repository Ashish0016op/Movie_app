import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner';
import MovieCard from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
const CurrentPlaying = () => {
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
  return (
    <div>
      <Banner/>
      {Movies.length!=0?(<div className="All_card">
            {Movies.map((image, index) => {
              console.log("image is", image.Url);
                return (
                  <div key={index}>
                    <MovieCard Details={image} />
                  </div>
                );
            })}
          </div>):
          <div>
            Loading...
          </div>
          }
    <Footer/>
    </div>
  )
}

export default CurrentPlaying
