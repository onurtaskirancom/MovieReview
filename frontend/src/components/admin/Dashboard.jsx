import React from 'react';
import MovieUpload from './MovieUpload';

export default function Dashboard() {
  return (
    <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded">
      <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-white">
        Total Uploads
      </h1>
      <p className="text-xl text-primary dark:text-white">100</p>
    </div>
  );
}
