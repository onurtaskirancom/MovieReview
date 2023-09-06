import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieForAdmin } from '../../api/movie';
import { useNotification } from '../../hooks';
import MovieListItem from '../MovieListItem';

export default function SearchMovies() {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('title');

  const { updateNotification } = useNotification();

  const searchMovies = async (val) => {
    const { error, results } = await searchMovieForAdmin(val);
    if (error) return updateNotification('error', error);

    setMovies([...results]);
  };

  useEffect(() => {
    if (query.trim()) searchMovies(query);
  }, [query]);

  return (
    <div className="p-5 space-y-3">
      {movies.map((movie) => {
        return <MovieListItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
