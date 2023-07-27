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

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-stone-200">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <img
          className="w-full h-full object-cover"
          src={movie && `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}></img>
      </div>
    </div>
  );
}

export default Main;
