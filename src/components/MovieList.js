import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Card from './Card';
function MovieList({type}) {
    const [movieList,setMovieList]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    function getData(){
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=cedd28562da42a165106688014984ac9&language=en-US`).then(res=>res.json()).then(data=>setMovieList(data.results));
    }
  return (
    <>
    <div className="movie_list">
        <h2 className="list_title">
            {type?type.split("_").join(" ").toUpperCase():"popular".toUpperCase()}
        </h2>
        <div className="list_cards">
            {movieList.map(movie=>(
                <Card movie={movie}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default MovieList