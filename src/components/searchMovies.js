import React, { useState } from "react";
import MovieData from "./MovieData";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const formSubmit = e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=49ee6df66131715a0c40fa51241889ab&language=en-US&query=${query}&page=1&include_adult=false`;
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results)).catch = err => console.error(err);
  };

  return (
    <>
      <form className="form" onSubmit={formSubmit}>
        <label htmlFor="query" />
        <input
          type="text"
          name="query"
          placeholder="e.g Home Alone"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
        <button>SEARCH</button>
      </form>
      <div>
        {movies.map(movie => {
          return (
            <>
              <MovieData movie={movie} />
            </>
          );
        })}
      </div>
    </>
  );
}
