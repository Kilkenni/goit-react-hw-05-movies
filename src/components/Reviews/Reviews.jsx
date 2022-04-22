import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import useFetch_Id_Page_Lang from "hooks/useFetch_Id_Page_Lang";

export default function Reviews({ apiBaseUrl }) {
  const { movieID } = useParams();
  const [movieReviews] = useFetch_Id_Page_Lang("TMDB_movieReviews", movieID, 1, undefined /* language: "en-US" */ );

  return (<section>
    <h3>Reviews</h3>
    {(movieReviews && movieReviews.results.length === 0) && <p>
      No reviews available for this movie.
    </p>}
    {(movieReviews && movieReviews.results) && <ul>
      {movieReviews.results.map((review) => {
        return (<li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>);  
      })}
    </ul>}
  </section>)
}

Reviews.propTypes = {
  apiBaseUrl: PropTypes.string.isRequired,
}