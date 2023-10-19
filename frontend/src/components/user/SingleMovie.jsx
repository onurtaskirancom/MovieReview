import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../../api/movie';
import { useNotification } from '../../hooks';

export default function SingleMovie() {
  const [ready, setReady] = useState(false);
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const { updateNotification } = useNotification();

  const fetchMovie = async () => {
    const { error, movie } = await getSingleMovie(movieId);
    if (error) return updateNotification('error', error);

    setMovie(movie);
  };

  useEffect(() => {
    if (movieId) fetchMovie();
  }, [movieId]);

  return <div>{movie.title}</div>;
}
