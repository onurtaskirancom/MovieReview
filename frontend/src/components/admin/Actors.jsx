import React, { useState } from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

export default function Actors() {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnMouseEnter = () => {
    setShowOptions(true);
  };

  const handleOnMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="grid grid-cols-4 gap-3 my-5">
      <div className="bg-white shadow dark:shadow dark:bg-secondary rounded h-20 overflow-hidden">
        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          className="flex cursor-pointer relative"
        >
          <img
            src="https://images.unsplash.com/photo-1656217818549-c7078fe222b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-20 aspect-square object-cover"
          />

          <div className="px-2">
            <h1 className="text-xl text-primary dark:text-white font-semibold">
              John Doe
            </h1>
            <p className="text-primary dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              reiciendis.
            </p>
          </div>

          {showOptions ? (
            <div className="absolute inset-0 bg-primary bg-opacity-25 backdrop-blur-sm flex justify-center items-center space-x-5">
              <button
                className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
                type="button"
              >
                <BsTrash />
              </button>
              <button
                className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
                type="button"
              >
                <BsPencilSquare />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
