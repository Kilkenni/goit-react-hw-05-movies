import PropTypes from "prop-types";

import style from "./MovieCard.module.css";

export default function MovieCard({title, poster_path}) {
  return (
    <div className={style.movieCard}>
      <h3 className={style.movieTitle}>{title}</h3>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
}