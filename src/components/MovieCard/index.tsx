import React from 'react';

import './styles.css';
import Header from '../Header';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  genres_name: string;
}

interface MovieItemProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <section className="movie-card">
      <section className="movie-card-content">
        <aside>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title + ' poster'}
          />
        </aside>

        <main className="movie-card-main">
          <Header title={movie.title} />
          <section>
            <div className="popularity">
              <div className="popularity-int">
                <div className="popularity-int-two">
                  <div className="popularity-percent">
                    <span>{movie.vote_average !==0 ? movie.vote_average * 10 + '%' : "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="description">
              <span>
                <p>{movie.release_date}</p>
              </span>

              <p>{movie.overview === "" ? "Sem sinopose" : movie.overview}</p>
              
              <div className="genrs">
                <h5 className="genrs-name">
                  {movie.genres_name}
                </h5>
              </div>
              
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default MovieCard;
