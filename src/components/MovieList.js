import React from 'react';
import './MovieList.css'

function MovieList(props) {
  return( 
        <>
            {props.list.map((movie) => (
                <div className='List'>
                    <h2 key='title' >{movie.Title}</h2>
                    <img key='poster' src={movie.Poster} alt='movie_Poster'/>
                </div>
            ))}
        </>
  )
}

export default MovieList;
