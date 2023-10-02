import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { getTopRatedMovies } from '../../api/movie';
import { useNotification } from '../../hooks';
import GridContainer from '../GridContainer';
import MovieList from './MovieList';

export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const { updateNotification } = useNotification();

  const fetchMovies = async () => {
    const { error, movies } = await getTopRatedMovies();
    if (error) return updateNotification('error', error);

    setMovies([...movies]);
  };

  const trimTitle = (text = '') => {
    if (text.length <= 20) return text;
    return text.substring(0, 20) + '..';
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <MovieList movies={movies} title="Viewers choice (Movies)" />;
}
