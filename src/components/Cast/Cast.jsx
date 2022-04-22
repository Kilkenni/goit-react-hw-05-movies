import { useParams} from "react-router-dom";
import PropTypes from "prop-types";

import useFetch_Id_Lang from "hooks/useFetch_Id_Lang";

export default function Cast({ apiBaseUrl }) {
  const { movieID } = useParams();
  const [movieCast] = useFetch_Id_Lang("TMDB_movieCredits", movieID, undefined /* language: "en-US" */);

  return (<section>
    <h3>Cast</h3>
    {(movieCast && movieCast.cast === 0) && <p>
      No credits available for this movie.
    </p>}
    {(movieCast && movieCast.cast) && <ul>
      {movieCast.cast.map((actor) => {
        return (<li key={actor.id}>
          <p>{actor.name}</p>
          <p>Role: {actor.character}</p>
        </li>);  
      })}
    </ul>}
  </section>)
}

Cast.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
}