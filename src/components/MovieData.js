import React from "react";

const MovieData = ({ movie }) => {
  return (
    <div key={movie.id} className="result">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
          movie.poster_path
        }`}
        alt={movie.poster_path}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Relase Date: {movie.release_date}</p>
      <p>Movie Rating: {movie.popularity}</p>
    </div>
  );
};
export default MovieData;
