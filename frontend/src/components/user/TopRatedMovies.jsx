import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../../api/movie';
import { useNotification } from '../../hooks';
import GridContainer from '../GridContainer';

export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const { updateNotification } = useNotification();

  const fetchMovies = async () => {
    const { error, movies } = await getTopRatedMovies();
    if (error) return updateNotification('error', error);

    setMovies([...movies]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <GridContainer>
      {movies.map((_, index) => {
        return <div className="p-5 bg-red-200" key={index}></div>;
      })}
    </GridContainer>
  );
}
