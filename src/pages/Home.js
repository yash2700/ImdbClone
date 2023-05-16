import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../components/MovieList';

function Home() {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=cedd28562da42a165106688014984ac9&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results));
  }, []) // <-- pass an empty array to avoid infinite loop

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          popularMovies.map((movie) => {
            return (
              <Link to={`/movie/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                </div>
                <div className="posterImage_overlay">
                  <div className="posterImage_title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage_runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage_rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="posterImage_description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </Carousel>
      <MovieList />
    </>
  )
}

export default Home
