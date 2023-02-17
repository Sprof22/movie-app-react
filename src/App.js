import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { OMDB_API_KEY, OMDB_API_URL } from "./api";
import MovieList from "./components/MovieList";

import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] =useState('')
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  const getMovieRequest = async () => {

		const response = await fetch(`${OMDB_API_URL}/?s=avengers&apikey=${OMDB_API_KEY}`);
		const responseJson = await response.json();

    setMovies(responseJson.Search)
    console.log(responseJson)
  }
    useEffect(() => {
      getMovieRequest() 
    }, [])
    
  return (
    <div className="container-fluid full-page">
      <div className="row">
        <div className="heading"></div>
        <div className="search"><Search onSearchChange={handleOnSearchChange} /></div>
      </div>
      <div className="d-flex">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
export default App;
