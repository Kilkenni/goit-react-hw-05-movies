import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import { TmdbApiService } from "../../js/TMDBApiService";
//import useFetchFromApi from "hooks/useFetchFromApi";
import MoviesList from "components/MoviesList";
//import style from "./MoviesPage.module.css"


export default function MoviesPage({ apiBaseUrl }) {
  const [inputString, setInputString] = useState("");
  //const [searchString, setSearchString] = useState("");
  //const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState(undefined);
 
  useEffect(() => {
    //we do not search for empty query
    if (!searchParams.get("query") || searchParams.get("query").length === 0) {
      return;
    }

    const page = searchParams.get("page");
    const query = searchParams.get("query");

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
  }, [searchParams]);

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