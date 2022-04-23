import { useParams} from "react-router-dom";
import PropTypes from "prop-types";

import useFetch_Id_Lang from "hooks/useFetch_Id_Lang";
import styled from "styled-components";

import { TmdbApiService } from "js/TMDBApiService";

const ActorInfo = styled.li`
  padding: 5px;
  border-bottom: 1px solid black;
  width: 50%;
  margin-left: 10px;
`;

const ActorPic = styled.img`
  display: inline-block;
  padding: 5px;
`;

export default function Cast({ apiBaseUrl }) {
  const { movieID } = useParams();
  const [movieCast] = useFetch_Id_Lang("TMDB_movieCredits", movieID, undefined /* language: "en-US" */);

  const imageHandler = new TmdbApiService("TMDB_image", {
    TMDB_base_url: apiBaseUrl,
    size: "w185",
    file_path: "",
  });

  return (<section>
    <h3>Cast</h3>
    {(movieCast && movieCast.cast === 0) && <p>
      No credits available for this movie.
    </p>}
    {(movieCast && movieCast.cast) && <ul>
      {movieCast.cast.map((actor) => {
        const { id, name, character, profile_path } = actor;
        return (<ActorInfo key={id}>
          {profile_path && <ActorPic src={imageHandler.handler.getImage(profile_path)} alt={name + "'s photo"} width="185" height="auto" />}
          <p>{name}</p>
          <p>Role: {character? character : "Unknown"}</p>
        </ActorInfo>);  
      })}
    </ul>}
  </section>)
}

Cast.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
}