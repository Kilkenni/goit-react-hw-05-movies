import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import { TmdbApiService } from "../../js/TMDBApiService";
//import useFetchFromApi from "hooks/useFetchFromApi";
import MoviesList from "../MoviesList";
//import style from "./MoviesPage.module.css"


export default function MoviesPage({ apiBaseUrl }) {
  const [inputString, setInputString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState(undefined);

  const page = searchParams.get("page");
  const query = searchParams.get("query");
 
  useEffect(() => {
    //we do not search for empty query
    if (!query || query.length === 0) {
      return;
    }

    const ApiHandler = new TmdbApiService("TMDB_search", {
      queryString: query,
      page: page,
    });

    async function fetchFromApi() {  
        const data = await ApiHandler.fetchData();
        if (data) {
            //console.log(data)
            setSearchResults(data);
        }        
    }

    fetchFromApi();

    return function abortFetch() {
        ApiHandler.abortFetch();
    }      
  }, [query, page]);

  const onNewSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("searchString");
    if (query.length === 0) {
      return;
    }

    setInputString("");
    if (searchParams && query === searchParams.get("query")) {
      return;
    }

    setSearchParams({ query });
    //setSearchString(formData.get("searchString"));      
  }

  return ( 
      <section>
        <form action="submit" onSubmit={onNewSearch}>
          <input
            type="text"
            name="searchString"
            value={inputString}
            onChange={(event) => setInputString(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {searchResults && <MoviesList
          movieDataArray={searchResults.results}
          apiBaseUrl={apiBaseUrl}
        />}
        
      </section>

  );
}

MoviesPage.propTypes = {
    apiBaseUrl: PropTypes.string.isRequired,
}