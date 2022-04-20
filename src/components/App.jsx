import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";

export const App = () => {
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/*" element={<MoviesPage />}/>
      </Routes>
    </div>
  );
};
