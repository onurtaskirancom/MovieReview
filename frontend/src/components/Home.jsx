import React from 'react';
import Container from './Container';
import NotVerified from './user/NotVerified';
import TopRatedMovies from './user/TopRatedMovies';

export default function Home() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen">
      <Container className="px-2 xl:p-0">
        <NotVerified />
        {/* slider */}
        {/* Most rated movies */}
        <TopRatedMovies />
      </Container>
    </div>
  );
}
