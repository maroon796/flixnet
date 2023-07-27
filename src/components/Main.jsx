import { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncatedText = (text, num) => {
    if (text?.length > num) {
      return text?.slice(0, num) + '...';
    }
    return text;
  };

  // console.log(movie);

  return (
    <div className="w-full h-[550px] text-stone-200">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <img
          className="w-full h-full object-cover"
          src={movie && `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}></img>
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl mb-4 font-bold">{movie?.title}</h1>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white ml-4 border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">Released: {movie?.release_date}</p>
          <p className="w-full text-gray-200 mt-4 lg:max-w-[75%]">
            {truncatedText(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
