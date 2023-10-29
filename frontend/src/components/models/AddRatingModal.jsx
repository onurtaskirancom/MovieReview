import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Submit from '../form/Submit';
import ModalContainer from './ModalContainer';

const ratings = new Array(10).fill('');
export default function AddRatingModal({ onSubmit }) {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [content, setContent] = useState('');

  const handleMouseEnter = (index) => {
    const ratings = new Array(index + 1).fill(index);
    setSelectedRatings([...ratings]);
  };

  const handleOnChange = ({ target }) => {
    setContent(target.value);
  };

  const handleSubmit = () => {
    if (!selectedRatings.length) return;
    const data = {
      rating: selectedRatings.length,
      content,
    };

    onSubmit(data);
  };

  return (
    <ModalContainer visible ignoreContainer>
      <div className="p-5 dark:bg-primary bg-white rounded space-y-3">
        <div className="relative text-highlight dark:text-highlight-dark flex items-center">
          {ratings.map((_, index) => {
            return (
              <AiOutlineStar
                onMouseEnter={() => handleMouseEnter(index)}
                className="cursor-pointer"
                key={index}
                size={24}
              />
            );
          })}

          <div className="flex absolute items-center top-1/2 -translate-y-1/2">
            {selectedRatings.map((_, index) => {
              return (
                <AiFillStar
                  onMouseEnter={() => handleMouseEnter(index)}
                  className="cursor-pointer"
                  key={index}
                  size={24}
                />
              );
            })}
          </div>
        </div>

        <textarea
          value={content}
          onChange={handleOnChange}
          className="w-full h-24 border-2 p-2 dark:text-white text-primary rounded outline-none bg-transparent resize-none"
        ></textarea>

        <Submit onClick={handleSubmit} value="Rate This Movie" />
      </div>
    </ModalContainer>
  );
}
