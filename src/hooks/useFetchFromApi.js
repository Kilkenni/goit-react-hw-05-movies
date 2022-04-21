import { useState, useEffect } from "react";

import { TmdbApiService } from "js/TMDBApiService";

//Custom hook for fetching data from TMDB (except config!)
//for acceptable handlers and parameters see TMDBApiService

export default function useFetchFromApi(handler, handlerParams) {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    //do once
    if (state !== undefined) {
      return;
    }

    const ApiHandler = new TmdbApiService(handler, handlerParams);

    async function fetchFromApi() {
      //console.log(ApiHandler.toString())
      const data = await ApiHandler.fetchData();
      if (data) {
          //console.log(data)
          setState(data);
      }
      // else {
      //   console.log(`Oops. Fetched data is ${data}`)
      // }
    }

    fetchFromApi();

    return function abortFetch() {
      ApiHandler.abortFetch();
    }
  }, [state, handler, handlerParams]);

  return state; 
}