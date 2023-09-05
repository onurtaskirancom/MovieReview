import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchMovies() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("title");

  const searchMovies = (val) => {
    // call the backend api
    console.log(val);
  };

  useEffect(() => {
    if (query.trim()) searchMovies(query);
  }, [query]);

  return <div>SearchMovie</div>;
}
