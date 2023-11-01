import React from 'react';
import RatingForm from '../form/RatingForm';
import ModalContainer from './ModalContainer';

export default function AddRatingModal() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <ModalContainer visible ignoreContainer>
      <RatingForm onSubmit={handleSubmit} />
    </ModalContainer>
  );
}
