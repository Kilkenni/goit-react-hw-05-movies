import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard";
import { TmdbApiService } from "../../js/TMDBApiService";

export default function MoviesList({ movieDataArray, apiBaseUrl }) {

  const ImageHandler = new TmdbApiService("TMDB_image", {
        TMDB_base_url: {apiBaseUrl},
        size: "w342",
        file_path: "",
    });

  return (<ul>
    {movieDataArray.map((movie) => {
      return (<li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          <MovieCard
            title={movie.title}
            poster_path={ImageHandler.handler.getImage(movie.poster_path)}
          />
        </Link>
      </li>);
    })}
  </ul>);
}

MoviesList.propTypes = {
  movieDataArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  })).isRequired,
  apiBaseUrl: PropTypes.string.isRequired,
}