import { useParams, useLocation, Outlet, Link, useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import PropTypes from "prop-types";
//import { useState, useEffect } from "react";

import useFetch_Id_Lang from "hooks/useFetch_Id_Lang";

const MovieDetailsPage = ({apiBaseUrl}) => {
  const { movieID } = useParams();
  const [movieData, isLoading ] = useFetch_Id_Lang("TMDB_movieData", movieID, undefined /* language: "en-US" */ ); 

  const currentLoc = useLocation().pathname;
  const moviePath = currentLoc.substring(0, currentLoc.indexOf(movieID) + movieID.length);

  const navigate = useNavigate();

  return (<div>
    <button type="button" onClick={() => {return navigate(-1)}}>Go back</button>
    <SpinnerDotted enabled={isLoading} size={100} color={ "red"}/>
    {movieData && <section>
      <h2>{movieData.title}</h2>
      <p>{movieData.overview}</p>
      
      <ul>
        <li>
          <Link
            to={`${moviePath}/cast`}
            replace
          >Cast</Link>
        </li>

        <li>
          <Link
            to={`${moviePath}/reviews`}
            replace
          >Reviews</Link>
        </li>
      </ul>
    </section>}

    <Outlet />
    
  </div>);
}

MovieDetailsPage.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
}

export default MovieDetailsPage;