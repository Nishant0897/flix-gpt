import { useEffect } from "react";
import { API_OPTIONS } from "../constants/API";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailer = ({ id }) => {
    
    const dispatch = useDispatch();
    const getTrailer = async() => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+id+"/videos",API_OPTIONS
        );
        const json = await data.json();
        const trailerData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = trailerData ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getTrailer();
    },[])
}

export default useTrailer;