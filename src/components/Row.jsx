import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-stone-200 font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={'slider' + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => {
            return <Movie item={item} key={id} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
