import React from 'react';

import Header from '../Header';
import './styles.css';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  genres: string;
}

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <section className="movie-item">
      <aside>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt={movie.title + ` poster`}
        />
      </aside>

      <section>
        <Header title={movie.title} id={movie.id} />
        <span><p>{movie.release_date}</p></span>
        <p>{movie.overview}</p>
        <footer>
          <span><p>{movie.genres}</p></span>
        </footer>
      </section>
    </section>
  );
};

export default MovieItem;
