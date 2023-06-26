import React, { useState } from 'react';
import { commonInputClasses } from '../../utils/theme';
import PosterSelector from '../PosterSelector';

const defaultActorInfo = {
  name: '',
  about: '',
  avatar: null,
};

export default function ActorForm({ title, btnTitle }) {
  const [actorInfo, setActorInfo] = useState({ ...defaultActorInfo });
  const [selectedAvatarForUI, setSelectedAvatarForUI] = useState('');

  const updatePosterForUI = (file) => {
    const url = URL.createObjectURL(file);
    setSelectedAvatarForUI(url);
  };

  const handleChange = ({ target }) => {
    const { value, files, name } = target;
    if (name === 'avatar') {
      const file = files[0];
      updatePosterForUI(file);
      return setActorInfo({ ...actorInfo, avatar: file });
    }

    setActorInfo({ ...actorInfo, [name]: value });
  };

  const { name, about } = actorInfo;
  return (
    <div className="dark:bg-primary bg-white p-3 w-[35rem] rounded">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold text-xl dark:text-white text-primary">
          {title}
        </h1>
        <button
          className="h-8 w-24 bg-primary text-white dark:bg-white dark:text-primary hover:opacity-80 transition rounded flex items-center justify-center"
          type="submit"
        >
          {btnTitle}
        </button>
      </div>

      <form className="flex space-x-2">
        <PosterSelector
          selectedPoster={selectedAvatarForUI}
          className="w-36 h-36 aspect-square object-cover"
          name="avatar"
          onChange={handleChange}
        />
        <div className="flex-grow flex flex-col space-y-2">
          <input
            placeholder="Enter name"
            type="text"
            className={commonInputClasses + ' border-b-2'}
            name="name"
            value={name}
            onChange={handleChange}
          />
          <textarea
            name="about"
            value={about}
            onChange={handleChange}
            placeholder="About"
            className={commonInputClasses + ' border-b-2 resize-none h-full'}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
