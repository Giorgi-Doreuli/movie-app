import React, { useState} from 'react';
import MovieList from './MovieList';
import './FindMovies.css'

function FindMovies() {
  
  const [posts, setPosts] = useState([]);
  const [movies, searchMovies] = useState('');
  const [showList,setShowList] = useState(false);


  const submitValue = () =>{
    getMovie(movies);
    setShowList(true);
  }
  
    const getMovie  = async (movies) => {
      const url = 'http://www.omdbapi.com/?s=' + movies + '&apikey=58ab96e8';

        const response = await fetch (url);
        const finalMovie = await response.json();
        setPosts(finalMovie.Search);
    }
 
    

  return(
     <div className='fullPage'>
        <div className='searchBar'>
            <input className = 'searchMovies' type="text" placeholder="search movie..." onChange={e => searchMovies(e.target.value)} />
            <button className='searchBtn btn' onClick={submitValue}>Submit</button>
        </div>
        <div className='moviesList'>
            {showList ? <MovieList list = {posts} /> : <h4>loading...</h4>}
        </div>
      </div>
  )
}

export default FindMovies;
