//import { useState, useEffect } from "react";
//import { Suspense } from "react";
import PropTypes from "prop-types";

//import style from "./HomePage.module.css";
import MoviesList from "components/MoviesList";
//import { TmdbApiService } from "../../js/TMDBApiService";
import useFetchFromApi from "hooks/useFetchFromApi";

export default function HomePage({ apiBaseUrl }) {
    const trends = useFetchFromApi("TMDB_trending", { page: 1 }); //useState(undefined); 

    // useEffect(() => {
    //     if (trends !== undefined) { //do once on component mount
    //         return;
    //     }

    //     const ApiHandler = new TmdbApiService("TMDB_trending", { page: 1 });

    //     async function fetchFromApi() {  
    //         const data = await ApiHandler.fetchData();
    //         if (data) {
    //             //console.log(data.results)
    //             setTrends(data.results);
    //         }        
    //     }

    //     fetchFromApi();

    //     return function abortFetch() {
    //         ApiHandler.abortFetch();
    //     }      
    // }, [trends]);

    return (<section>
        <h2>Trending movies:</h2>       
            {trends && <MoviesList
            movieDataArray={trends.results}
            apiBaseUrl={apiBaseUrl}
            />} 
    </section>);
};

HomePage.propTypes = {
    apiBaseUrl: PropTypes.string.isRequired,
}