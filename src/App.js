import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import search from "./search.svg";
import MovieCard from './MovieCard'

const movie1 = {
  Title: "The Amazing Spider-Man",
  Year: "2012",
  imdbID: "tt0948470",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
};

// 2ed5d710
const API_URL = "http://www.omdbapi.com?apikey=2ed5d710";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("amazing");
  }, []);

  return (
    <div className="app">
      <h1>Movie Hub</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search any movie"
          value={"spider"}
          onChange={() => {}}
        />
        <img src={search} alt="search" />
      </div>
      <div className="container">
        <MovieCard movie={movie1}/>
      </div>
    </div>
  );
};

export default App;
