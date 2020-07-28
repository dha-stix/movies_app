import React from "react";
import "./styles.css";
import SearchMovies from "./components/searchMovies";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Sabi Movies</h1>
      <SearchMovies />
    </div>
  );
}
