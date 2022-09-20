import axios from 'axios';

import { useEffect, useState } from 'react';

import MovieRow from './components/MovieRow';

const fetchMovies = async (setMovies) => {
  const headersList = {
    Accept: '*/*',
  };

  const reqOptions = {
    url: 'http://localhost:3000/movies/',
    method: 'GET',
    headers: headersList,
  };

  const response = await axios.request(reqOptions);
  console.log(response.data);
  setMovies(response.data);
};

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length <= 0) {
      fetchMovies(setMovies);
    }
  });

  return (
    <div className="App">
      <div className="left-side flex min-h-screen ">
        <div className="bg-eggsheld flex-none w-1/3 caveat text-7xl max-w-xl text-center ">
          <div className="flex-col flex place-content-around h-full">
            <div className="mb-10">Logo</div>
            <div className="h-1/5 underline decoration-wavy decoration-violet-200 decoration-4 underline-offset-8 text-violet-400">
              Movies
            </div>
            <div className="h-1/5">Producers</div>
            <div className="h-1/5">Directors</div>
            <div className="h-1/5">A.I</div>
          </div>
        </div>
        <div className="bg-ice flex-1 flex-col flex  justify-around rancho">
          {movies.map((movie) => (
            <MovieRow key={movie.id} movie={movie} />
          ))}
          <div className="h-min">
            <ol className="flex justify-center text-xs font-medium gap-1">
              <li>
                <a
                  href="/?page=1"
                  className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/?page=1"
                  className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
                >
                  1
                </a>
              </li>

              <li className="block w-8 h-8 text-center text-white bg-blue-600 border-blue-600 rounded leading-8">
                2
              </li>

              <li>
                <a
                  href="/?page=3"
                  className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="/?page=4"
                  className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="/?page=3"
                  className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
