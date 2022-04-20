import { useState, useEffect } from "react";

//import style from "./HomePage.module.css";
import { TmdbApiService } from "../../js/TMDBApiService";

export default function HomePage(props) {
    const [trends, setTrends] = useState(undefined);

    useEffect(() => {
        if (trends !== undefined) { //do once on component mount
            return;
        }

        const ApiHandler = new TmdbApiService("TMDB_trending", { page: 1 });

        async function fetchFromApi() {  
            const data = await ApiHandler.fetchData();
            if (data) {
                //console.log(data.results)
                setTrends(data.results);
            }        
        }

        fetchFromApi();

        return function abortFetch() {
            ApiHandler.abortFetch();
        }      
    }, [trends]);

    return (<>
        <h2>Trending movies:</h2>
        <ul>
            {trends && trends.map((movie) => {
                return (<li key={movie.id}>
                    {movie.title }
                </li>);
            })}
        </ul>
    </>);
};