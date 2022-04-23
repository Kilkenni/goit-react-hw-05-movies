import { useParams, useLocation, Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import PropTypes from "prop-types";
//import { useEffect } from "react";

import styled from "styled-components";

import useFetch_Id_Lang from "hooks/useFetch_Id_Lang";
import { TmdbApiService } from "js/TMDBApiService";

/* Styles for components */

const MovieBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MoviePoster = styled.img`
  display: inline-block;
  padding: 5px;
`;

const MovieInfoBlock = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const MovieTitle = styled.h2`
  font-size: 30px;
`;

// let's try with an object as well for practice
const MovieSublinksBlock = styled.div({
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  padding: "10px",
});

/* Page view */

  
const MovieDetailsPage = ({apiBaseUrl, genresArray}) => {
  const { movieID } = useParams();
  const [movieData, isLoading, error] = useFetch_Id_Lang("TMDB_movieData", movieID, undefined /* language: "en-US" */);

  const currentLoc = useLocation().pathname;
  const moviePath = currentLoc.substring(0, currentLoc.indexOf(movieID) + movieID.length);

  const navigate = useNavigate();

  const imageHandler = new TmdbApiService("TMDB_image", {
    TMDB_base_url: apiBaseUrl,
    size: "w342",
    file_path: "",
  });

  let title, genres, overview, poster_path, vote_average;
  if (movieData) {
    ({ title, genres, overview, poster_path, vote_average} = movieData);
  }
  
  return (<div>
    <button type="button" onClick={() => { return navigate(-1) }}>Go back</button>
    {error === 404 && <Navigate to="/" replace={true} />}

    <SpinnerDotted enabled={isLoading} size={100} color={ "red"}/>
    {movieData && <section>
      <MovieBlock>
        {poster_path && <MoviePoster src={imageHandler.handler.getImage(poster_path)} alt={`Poster for ${title}`} width="342" height="auto" />}
        <MovieInfoBlock>
          <MovieTitle>{title}</MovieTitle>
          <p>User score: { vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview ? overview : "No overview available."}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map((genre) => {
            return genre.name;
          }).join(", ")       
          : "No genres available in the database."}</p>
        </MovieInfoBlock>
      </MovieBlock>
      
      <MovieSublinksBlock>
        <h3>Additional information</h3>
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
      </MovieSublinksBlock>     
    </section>}

    <Outlet />
    
  </div>);
}

MovieDetailsPage.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
  genresArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  } )),
}

export default MovieDetailsPage;