import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black ">
      <div className='-mt-12 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

        <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>

        <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>

        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      </div>  
        
      
    </div>
  )
  )
}

export default SecondaryContainer;
