import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { OMDB_API_KEY, OMDB_API_URL } from "./api";
import MovieList from "./components/MovieList";

import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([
    
    {
      Title: "Iron Man 2",
      Year: "2010",
      imdbID: "tt1228705",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "The Man with the Iron Heart",
      Year: "2017",
      imdbID: "tt3296908",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGMxYTQtOGY1Mi00N2ZhLThkYzgtNDhlZjhlNzg4MWU0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    },
    {
      Title: "Iron Man: Rise of Technovore",
      Year: "2013",
      imdbID: "tt2654124",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGJkNDQwNzUtNWE0MC00MGVjLWFjMjEtODMyNTExMTU4ZDRhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  const getMovieRequest = async (searchValue) => {

		const response = await fetch(`${OMDB_API_URL}/?s=${searchValue}&apikey=${OMDB_API_KEY}`);
		const responseJson = await response.json();
  }
    useEffect(() => {
      getMovieRequest() 
    }, [])
    
  return (
    <div className="container-fluid full-page">
      <Search onSearchChange={handleOnSearchChange} />
      <div className="d-flex">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
export default App;
