import React, { FormEvent, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import MovieCard, { Movie } from './components/MovieCard';
import MovieCardModal from './components/MovieCardModal';
import { Modal } from 'antd';

import api from './services/api';

import {
  Pagination,
  PaginationItem,
  PaginationArrow,
  LinkModal,
} from './Styles';

import './assets/styles/global.css';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState({});

  async function searchMovies(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.get(
        `/search/movie?api_key=${process.env.REACT_APP_API}&language=pt-BR&query=${query}
        &page=${currentPage}&results=${limit}`,
      );

      console.log(response.data);
      setResults(response.data.total_results);
      const totalPages = Math.ceil(response.data.total_results / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);
      console.log(`TOTAL:${arrayPages}`);

      setMovies(response.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  async function openModal(id: Number) {
    try {
      const response = await api.get(
        `/movie/${id}?api_key=${process.env.REACT_APP_API}`,
      );
      console.log(response.data);
      setSelected(response.data);
      setIsVisible(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <Header title="Movies" />

      <section>
        <form onSubmit={searchMovies}>
          <SearchForm
            type="text"
            placeholder="Busque um filme por nome, ano ou gênero..."
            autoComplete="off"
            autoFocus={true}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
      </section>
      <section>
        {movies
          .filter((movie: Movie) => movie.poster_path)
          .map((movie: Movie) => (
            <LinkModal onClick={() => openModal(movie.id)}>
              <MovieCard movie={movie} key={movie.id} />
            </LinkModal>
          ))}
        ;
      </section>

      <section className="pagination">
        <Pagination>
          <PaginationArrow id="previous"></PaginationArrow>
          {pages.map((page) => (
            <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationItem>
          ))}
          <PaginationArrow id="next"></PaginationArrow>
        </Pagination>
      </section>
    </div>
  );
}

export default App;
