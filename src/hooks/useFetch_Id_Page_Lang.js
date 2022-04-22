import { useState, useEffect } from "react";

import { TmdbApiService } from "js/TMDBApiService";

//Custom hook for fetching data from TMDB (except config!)
//for acceptable handlers and parameters see TMDBApiService

export default function useFetch_Id_Page_Lang(handler, movie_id, page, language) {
  const [state, setState] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //do once
    if (state !== undefined) {
      return;
    }

    const ApiHandler = new TmdbApiService(handler, {
      movie_id: movie_id,
      page: page,
      language: language,
    });

    async function fetchFromApi() {
      //console.log(ApiHandler.toString())

      setIsLoading(true);
      try {
        const data = await ApiHandler.fetchData();
        if (data) {
          //console.log(data)
          setState(data);
        }
        else {
          throw new Error(`Fetched data is ${data}`);
        }
      }
      catch (error) {
          //console.log(error.message);        
      }      
      finally {
          setIsLoading(false);
      }
    }

    fetchFromApi();

    return function abortFetch() {
      ApiHandler.abortFetch();
    }
  }, [state, handler, movie_id, page, language]);

  return [state, isLoading]; 
}