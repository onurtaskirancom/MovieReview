import React from "react";
import { commonInputClasses } from "../../utils/theme";

export default function ActorForm({ title, btnTitle }) {
  return (
    <div className="dark:bg-primary bg-white p-3 w-[35rem] rounded">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold text-xl dark:text-white text-primary">
          {title}
        </h1>
        <button
          className="px-3 py-1 bg-primary text-white dark:bg-white dark:text-primary hover:opacity-80 transition rounded"
          type="submit"
        >
          {btnTitle}
        </button>
      </div>

      <form className="flex space-x-2">
        <img
          src="https://images.unsplash.com/photo-1657299143228-f971e4887268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-36 h-36 aspect-square object-cover"
        />
        <div className="flex-grow flex flex-col space-y-2">
          <input
            placeholder="Enter name"
            type="text"
            className={commonInputClasses + " border-b-2"}
          />
          <textarea
            placeholder="About"
            className={commonInputClasses + " border-b-2 resize-none h-full"}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
