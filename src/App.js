import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import search from "./search.svg";
import MovieCard from "./MovieCard";

// const movie1 = {
//   Title: "The Amazing Spider-Man",
//   Year: "2012",
//   imdbID: "tt0948470",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
// };

// 2ed5d710
const API_URL = "http://www.omdbapi.com?apikey=2ed5d710";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data?.Search);
    // console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Hub</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search any movie"
          value={searchterm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={search}
          alt="search"
          onClick={() => {
            searchMovies(searchterm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
