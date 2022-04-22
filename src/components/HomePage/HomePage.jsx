//import { useState, useEffect } from "react";
//import { Suspense } from "react";
import { SpinnerDotted } from "spinners-react";
import PropTypes from "prop-types";

//import style from "./HomePage.module.css";
import MoviesList from "components/MoviesList";
//import { TmdbApiService } from "../../js/TMDBApiService";
import useFetch_Page from "hooks/useFetch_Page";


export default function HomePage({ apiBaseUrl }) {
    const [ trends, isLoading ] = useFetch_Page("TMDB_trending", 1);

    return (<section>
        <h2>Trending movies:</h2>  
        <SpinnerDotted enabled={isLoading} size={100} color={ "red"}/>
        {trends && <MoviesList
            movieDataArray={trends.results}
            apiBaseUrl={apiBaseUrl}
        />} 
    </section>);
};

HomePage.propTypes = {
    apiBaseUrl: PropTypes.string.isRequired,
}