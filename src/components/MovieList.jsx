import React from 'react'

const MovieList = (props) => {
  return (
    <div className='d-flex justify-content-start m-3'>
        {props.movies.map((movie, index) => (
            <div className=''><img src={movie.Poster} alt={`${movie.TItle}`}></img></div>
        ))}
    </div>
  )
}

export default MovieList