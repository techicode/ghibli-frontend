const MovieRow = ({ movie }) => {
  return (
    <div className="rounded-lg  h-full grid grid-cols-5 my-5 ">
      <img
        src={movie.cover_img}
        alt={`${movie.title} cover picture`}
        className="object-scale-down h-40 w-96"
      />
      <div className="sm:col-span-2">
        <h1 className=" text-2xl text-gray-800">{movie.title}</h1>
        <p className="text-gray-700">{movie.summary}</p>
      </div>
      <div className="flex-none col-span-2">
        <strong className="inline-flex items-center gap-2 px-5 py-2 bg-very-light-pink rounded-full">
          <img
            alt="Man"
            src={movie.director.picture}
            className="object-cover w-12 h-12 -ml-2 rounded-full"
          />
          <ul className="flex-col gap-1">
            <li className="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-eggsheld rounded-full">
              Director
            </li>
            <li className="text-xl px-3 py-1 font-medium text-gray-900">
              {movie.director.name}
            </li>
          </ul>
        </strong>
        <strong className="inline-flex items-center gap-2 px-5 py-2 bg-eggsheld rounded-full">
          <img
            alt="Man"
            src={movie.producer.picture}
            className="object-cover w-12 h-12 -ml-2 rounded-full"
          />

          <ul className="flex-col gap-1">
            <li className="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-very-light-pink rounded-full">
              Producer
            </li>
            <li className="text-xl px-3 py-1 font-medium text-gray-900">
              {movie.producer.name}
            </li>
          </ul>
        </strong>
      </div>
    </div>
  );
};

export default MovieRow;
