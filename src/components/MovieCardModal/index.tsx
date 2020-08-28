import React from 'react';

import './styles.css';

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  status: string;
  overview: string;
  vote_average: number;
  genres: string;
  original_language: string;
  runtime: number;
  budget: BigInt; //orçamento
  revenue: BigInt; //receita
}

interface MovieItemProps {
  movie: Movie;
}

const MovieCardModal: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <section className="movie-card">
      <section className="movie-card-content">
        <div>
          <h1>{movie.original_title}</h1>
          <span>
            <p>{movie.release_date}</p>
          </span>
        </div>

        <div>
          <main className="movie-card-main">
            <h3>Sinopse</h3>
            <hr />

            <div className="description">
              <p>{movie.overview === '' ? 'Sem sinopose' : movie.overview}</p>

              <div className="genrs">
                <h5 className="genrs-name">{movie.genres}</h5>
              </div>
            </div>

            <h3>Informações</h3>
            <hr />
            <table>
              <tr>
                <th>Situação</th>
                <th>Idioma</th>
                <th>Duração</th>
                <th>Orçamento</th>
                <th>Receita</th>
                <th>Lucro</th>
              </tr>
              <tr>
                <td>{movie.status}</td>
                <td>{movie.original_language}</td>
                <td>{movie.runtime}</td>
                <td>{movie.budget}</td>
                <td>{movie.revenue}</td>
                <td>{movie.budget} - {movie.revenue} !== 0  ? '$'+ {movie.budget} - {movie.revenue} : 'N/A'</td>
              </tr>
            </table>

            <div className="popularity">
              <div className="popularity-int">
                <div className="popularity-int-two">
                  <div className="popularity-percent">
                    <span>
                      {movie.vote_average !== 0 ? movie.vote_average * 10 + '%' : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <aside>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.original_title + ' poster'}
          />
        </aside>
      </section>
    </section>
  );
};

export default MovieCardModal;
