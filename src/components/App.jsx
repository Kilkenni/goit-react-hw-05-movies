import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage";

import { TmdbApiService } from "js/TMDBApiService";

export const App = () => {
  const [apiConfig, setApiConfig] = useState(undefined);



  useEffect(() => {
    if (apiConfig !== undefined) {
      return;
    }

    const ApiConfigHandler = new TmdbApiService("TMDB_config");

    async function fetchFromApi() {  
        const data = await ApiConfigHandler.fetchData();
        if (data) {
            //console.log(data)
            setApiConfig(data);
        }        
    }

    fetchFromApi();

    return function abortFetch() {
        ApiConfigHandler.abortFetch();
    }

    
  }, [apiConfig])

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
            <Suspense fallback={<p>Loading...</p>}>
              <HomePage apiBaseUrl={apiConfig.images.secure_base_url} />
            </Suspense>        
          }
        />
        <Route
          path="/movies"
          element={<MoviesPage apiBaseUrl={apiConfig.images.secure_base_url} />}
        />
        <Route
          path="/movies/:movieID"
          element={<MovieDetailsPage apiBaseUrl={apiConfig.images.secure_base_url} />}        
        />
        {/* default path, page 404 should be here. Redirecting to home as per task */}
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
      </Routes>}
    </div>
  );
};
