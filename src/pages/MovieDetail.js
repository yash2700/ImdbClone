import React, { useEffect, useState } from 'react'
import './MovieDetail.css'
import { useParams, useSearchParams } from 'react-router-dom'

function MovieDetail() {
    const {id}=useParams();

    const [currentMovieDetail,setCurrentMovieDetail]=useState()
    useEffect(()=>{
        getData();
    },[])
    function getData(){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cedd28562da42a165106688014984ac9&language=en-US`).then(res=>res.json()).then(data=>setCurrentMovieDetail(data));

    }
  return (
   <>
   <div className="movie">
    <div className="backdrop">
        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="" />
    </div>
    <div className="movie_detail">
        <div className="left">
        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
        </div>
        <div className="right">
            <div className="top">
            <h1>{currentMovieDetail ? currentMovieDetail.original_title : ""}</h1>
            <div className="tagline">
            {currentMovieDetail ? currentMovieDetail.tagline : ""}
            <div className="movie_rating">
                <div className="rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" /></div>
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
            <div className="movie_runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
            <div className="movie_releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>

            <div className="movie_genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
            </div>
            </div>
            <div className="bottom">
                    <h2>Synopsis</h2>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>
        </div>
    </div>
   </div>
   <div className="links">
    <h1>Useful Links</h1>
   {currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>}
    
    {currentMovieDetail && currentMovieDetail.homepage && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank"><p className='imd'>IMDB <i className="newTab fas fa-external-link-alt"></i></p></a>}
   </div>

   <div className="production">
    <h1>Production Companies</h1>
    <div className='prodimages'>
    {currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map((company)=>(
        <>
        {company.logo_path && 
            <span>
                <img className='productionImage' src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="" />
            </span>
        }
        </>
    ))}
            </div>
   </div>
   </>
  )
}

export default MovieDetail