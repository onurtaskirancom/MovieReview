import React from "react";

export default function MovieForm() {
  return (
    <form className="flex space-x-3">
      <div className="w-[70%]">
        <label
          htmlFor="title"
          className="dark:text-dark-subtle text-light-subtle font-semibold"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full bg-transparent outline-none border-b-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary transition font-semibold text-xl dark:text-white text-primary"
          placeholder="Titanic"
        />
      </div>
      <div className="w-[30%] h-5 bg-blue-400"></div>
    </form>
  );
}
