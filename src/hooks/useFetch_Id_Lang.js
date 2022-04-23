import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TmdbApiService } from "js/TMDBApiService";

//Custom hook for fetching data from TMDB (except config!)
//for acceptable handlers and parameters see TMDBApiService

export default function useFetch_Id_Lang(handler, movie_id, language) {
  const [state, setState] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    //do once
    if (state !== undefined) {
      return;
    }

    const ApiHandler = new TmdbApiService(handler, {
      movie_id: movie_id,
      language: language,
    });

    async function fetchFromApi() {
      //console.log(ApiHandler.toString())

      setIsLoading(true);
      try {
        const data = await ApiHandler.fetchData();
        if (data === -404) {
          setError(404);
        }
        else if (data) {
          //console.log(data)
          setState(data);
        }
        else {
          //throw new Error(`Fetched data is ${data}`);
        }
      }
      catch (error) {
        console.log(error.message);                
      }      
      finally {
          setIsLoading(false);
      }
    }

    fetchFromApi();   

    return function abortFetch() {
      ApiHandler.abortFetch();
    }
  }, [state, handler, movie_id, language]);

  return [state, isLoading, error]; 
}