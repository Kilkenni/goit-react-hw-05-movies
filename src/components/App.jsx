import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { SpinnerDotted } from "spinners-react";

import NavBar from "./NavBar";
import { TmdbApiService } from "js/TMDBApiService";

const HomePage = lazy(() => {
  return import("./HomePage" /* webpackChunkName: "home-page" */);
});
const MoviesPage = lazy(() => import("./MoviesPage" /* webpackChunkName: "movies-page" */) );
const MovieDetailsPage = lazy(() => {
  return import("./MovieDetailsPage" /* webpackChunkName: "movie-details-page" */);
});
const Cast = lazy(() => import("./Cast" /* webpackChunkName: "cast-subpage"*/));
const Reviews = lazy(() => {
  return import("./Reviews" /* webpackChunkName: "reviews-subpage"*/);
});

function useFetchNoParams(fetchType) {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    if (state !== undefined) {
      return;
    }

    const ApiConfigHandler = new TmdbApiService(fetchType);

    async function fetchFromApi() {
      const data = await ApiConfigHandler.fetchData();
      if (data) {
        //console.log(data)
        setState(data);
      }
    }

    fetchFromApi();

    return function abortFetch() {
      ApiConfigHandler.abortFetch();
    }
  }, [state, fetchType]);

  return state;
}

export const App = () => {
  const apiConfig = useFetchNoParams("TMDB_config");
  const genreConfig = useFetchNoParams("TMDB_genres");
  const genres = genreConfig ? genreConfig.genres : undefined;

  // useEffect(() => {
  //   if (apiConfig !== undefined) {
  //     return;
  //   }

  //   const ApiConfigHandler = new TmdbApiService("TMDB_config");

  //   async function fetchFromApi() {  
  //       const data = await ApiConfigHandler.fetchData();
  //       if (data) {
  //           //console.log(data)
  //           setApiConfig(data);
  //       }        
  //   }

  //   fetchFromApi();

  //   return function abortFetch() {
  //       ApiConfigHandler.abortFetch();
  //   }
  // }, [apiConfig])

  return (
    <div
      style={{
        height: '100vh',
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        fontSize: 20,
        // textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <NavBar/>

      {apiConfig && <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SpinnerDotted size={100} color={ "red"}/>}>
              <HomePage apiBaseUrl={apiConfig.images.secure_base_url} />
            </Suspense>        
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<SpinnerDotted size={100} color={ "red"}/>}>
              <MoviesPage apiBaseUrl={apiConfig.images.secure_base_url} />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieID"
          element={
            <Suspense fallback={<SpinnerDotted size={100} color={ "red"}/>}>
              <MovieDetailsPage apiBaseUrl={apiConfig.images.secure_base_url} genresArray={ genres}/>
            </Suspense>
          }        
        >
          <Route
            path="/movies/:movieID/cast"
            element={
              <Suspense fallback={<SpinnerDotted size={100} color={ "red"}/>}>
                <Cast apiBaseUrl={apiConfig.images.secure_base_url} />
              </Suspense>
            } />
          <Route
            path="/movies/:movieID/reviews"
            element={
              <Suspense fallback={<SpinnerDotted size={100} color={ "red"}/>}>
                <Reviews apiBaseUrl={apiConfig.images.secure_base_url} />
              </Suspense>
            } />
        </Route>
        {/* default path, page 404 should be here. Redirecting to home as per task */}
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
      </Routes>}
    </div>
  );
};
