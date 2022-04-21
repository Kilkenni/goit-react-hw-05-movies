import { useParams, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
//import { useState, useEffect } from "react";

import useFetchFromApi from "hooks/useFetchFromApi";

const MovieDetailsPage = ({apiBaseUrl}) => {
  const { movieID } = useParams();
  const movieData = useFetchFromApi("TMDB_movieData", {
    movie_id: movieID,
    //language: "en-US"
  });

  return (<div>
    {/* <p>Movie ID {movieID }</p> */}
    {movieData && <section>
      <h2>{movieData.title}</h2>
      <p>{ movieData.overview }</p>
    </section>}

    <Outlet />
    
  </div>);
}

MovieDetailsPage.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
}

export default MovieDetailsPage;