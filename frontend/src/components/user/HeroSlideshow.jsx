import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { getLatestUploads } from '../../api/movie';
import { useNotification } from '../../hooks';

let count = 0;
export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState({});
  const [clonedSlide, setClonedSlide] = useState({});
  const [slides, setSlides] = useState([]);
  const slideRef = useRef();
  const clonedSlideRef = useRef();

  const { updateNotification } = useNotification();

  const fetchLatestUploads = async () => {
    const { error, movies } = await getLatestUploads();
    if (error) return updateNotification('error', error);

    setSlides([...movies]);
    setCurrentSlide(movies[0]);
  };

  //0,1,2,3,4
  const handleOnNextClick = () => {
    setClonedSlide(slides[count]);
    count = (count + 1) % slides.length;
    setCurrentSlide(slides[count]);

    clonedSlideRef.current.classList.add('slide-out-to-left');
    slideRef.current.classList.add('slide-in-from-right');
  };

  const handleOnPrevClick = () => {
    setClonedSlide(slides[count]);
    count = (count + slides.length - 1) % slides.length;
    setCurrentSlide(slides[count]);

    clonedSlideRef.current.classList.add('slide-out-to-right');
    slideRef.current.classList.add('slide-in-from-left');
  };

  const handleAnimationEnd = () => {
    const classes = [
      'slide-out-to-left',
      'slide-in-from-right',
      'slide-out-to-right',
      'slide-in-from-left',
    ];
    slideRef.current.classList.remove(...classes);
    clonedSlideRef.current.classList.remove(...classes);
    setClonedSlide({});
  };

  useEffect(() => {
    fetchLatestUploads();
  }, []);

  return (
    <div className="w-full flex">
      {/* Slide show section */}
      <div className="w-4/5 aspect-video relative overflow-hidden">
        <img
          ref={slideRef}
          onAnimationEnd={handleAnimationEnd}
          className="aspect-video object-cover"
          src={currentSlide.poster}
          alt=""
        />
        <img
          ref={clonedSlideRef}
          //   onAnimationEnd={handleAnimationEnd}
          className="aspect-video object-cover absolute inset-0"
          src={clonedSlide.poster}
          alt=""
        />

        <SlideShowController
          onNextClick={handleOnNextClick}
          onPrevClick={handleOnPrevClick}
        />
      </div>

      {/* Up Next Section */}
      <div className="w-1/5 aspect-video bg-red-300"></div>
    </div>
  );
}

const SlideShowController = ({ onNextClick, onPrevClick }) => {
  const btnClass =
    'bg-primary rounded border-2 text-white text-xl p-2 outline-none';
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between px-2">
      <button onClick={onPrevClick} className={btnClass} type="button">
        <AiOutlineDoubleLeft />
      </button>
      <button onClick={onNextClick} className={btnClass} type="button">
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};
