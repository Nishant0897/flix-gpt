import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackgound from "./VideoBackground"
import TitleBackgound from "./TitleBackground"

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[5];
    const { original_title, overview,id } = mainMovie;
  return (
    <div>
      <TitleBackgound title={original_title} overview={overview} />
          <VideoBackgound id={id} />
    </div>
  );
}

export default MainContainer
