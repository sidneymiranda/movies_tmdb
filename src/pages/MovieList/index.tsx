import React, { FormEvent, useState } from 'react';

import Header from '../../components/Header';
import SearchMovie from '../../components/SearchMovie';
import MovieItem, { Movie } from '../../components/MovieItem';

import './styles.css';

const MovieList = () => {
  const apiKey = process.env.REACT_APP_API;

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function searchMovies(e: FormEvent) {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header title="Movies" />

      <SearchMovie
        className="form-container-movie"
        onSubmit={searchMovies}
        placeholder="Busque um filme por nome, ano ou gênero..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {movies
        .filter((movie: Movie) => movie.poster_path)
        .map((movie: Movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
    </>
  );
};

export default MovieList;
