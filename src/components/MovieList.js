import React,  { useState } from 'react';
import './MovieList.css'
import FavouriteMovies from './FavouriteMovies'

function MovieList(props) {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [showFavourites, setShowFavourites] = useState(false);
    let counter = 0;


    const addToFavourites = (movies) => {
        for(let i = 0; i < favouriteMovies.length ; i++){
            if(favouriteMovies[i] === movies){
                counter++;
            } 
        }

        if(counter === 0){
            setFavouriteMovies(prev => [...prev, movies]);
        }
        counter = 0;
        setShowFavourites(true);
    }


    const removeFavourites = (movies) => {
        setFavouriteMovies(favouriteMovies.filter(item => item.Poster !== movies.Poster));
      }
    
    

    
  return( 
        <>
            <div className='moviesList'>
                <h3>Movies</h3>
                <div className='movies'>
                    {props.list.map((moviePosters) => (
                        <div className='List'>
                            <img className='moviePoster' key='poster' src={moviePosters.Poster} alt='movie_Poster' onClick={() => addToFavourites(moviePosters)}/>
                        </div>
                    ))}
                </div>

                <h3>Favourites </h3>

                {showFavourites ? <FavouriteMovies favourites = {favouriteMovies} handleClick={removeFavourites} /> : <h4>favourites section is empty, you can add or remove favourite movies by clicking on them</h4>}
            
            </div>
        </>
  )
}

export default MovieList;
