import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

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
      React homework #05 Movie search (React Router)

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route >
          404 page not found
        </Route>
      </Routes>
    </div>
  );
};
