import React from 'react';
import './FavouriteMovies.css'

function FavouriteMovies(props) {
  
  return (
    <div className='favouriteMovies'>
          {props.favourites.map((moviePosters) => (
              <div className='favouritesList'> 
                  <img className='moviePoster' key='poster' src={moviePosters.Poster} alt='movie_Poster' onClick={() => props.handleClick(moviePosters)}/>
              </div>    
              ))}
    </div>
  )}

export default FavouriteMovies;
