import React from 'react'
import MovieCard from './MovieCard'
import { IMG_CDN } from '../constants/API';

const MovieList = ({title,movies}) => {
    if (!movies) return;
    
  return (
    <div className="">
      <h1 className="pt-6 text-white font-bold text-xl p-2 m-2">{title}</h1>
      <div className="flex overflow-x-scroll overflow-hidden no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} imagePath={IMG_CDN + movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList
