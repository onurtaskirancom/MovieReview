import React, { useState, useEffect } from 'react';
import { deleteMovie, getMovies } from '../api/movie';
import { useNotification } from '../hooks';
import ConfirmModal from './models/ConfirmModal';
import MovieListItem from './MovieListItem';

const pageNo = 0;
const limit = 5;

export default function LatestUploads() {
  const [movies, setMovies] = useState([]);
  const [busy, setBusy] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { updateNotification } = useNotification();

  const fetchLatestUploads = async () => {
    const { error, movies } = await getMovies(pageNo, limit);
    if (error) return updateNotification(error);

    setMovies([...movies]);
  };

  const handleOnDeleteClick = (movie) => {
    setSelectedMovie(movie);
    setShowConfirmModal(true);
  };

  const handleOnDeleteConfirm = async () => {
    setBusy(true);
    const { error, message } = await deleteMovie(selectedMovie.id);
    setBusy(false);

    if (error) return updateNotification('error', error);

    updateNotification('success', message);
    fetchLatestUploads();
    hideConfirmModal();
  };

  const hideConfirmModal = () => setShowConfirmModal(false);

  useEffect(() => {
    fetchLatestUploads();
  }, []);

  return (
    <>
      <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded col-span-2">
        <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-white">
          Recent Uploads
        </h1>

        <div className="space-y-3">
          {movies.map((movie) => {
            return (
              <MovieListItem
                onDeleteClick={() => handleOnDeleteClick(movie)}
                key={movie.id}
                movie={movie}
              />
            );
          })}
        </div>
      </div>

      <ConfirmModal
        title="Are you sure?"
        subtitle="This action will remove this movie permanently!"
        visible={showConfirmModal}
        onCancel={hideConfirmModal}
        onConfirm={handleOnDeleteConfirm}
        busy={busy}
      />
    </>
  );
}
