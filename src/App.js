import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//importing components
import SearchBar from "./Components/SearchBar.js";
import MetaLogin from "./Components/MetaLogin.js";

const App = () => {
  const [auth, setAuth] = useState(false);

  //route setting
  let allowedRoutes = (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route
        path="/login"
        element={<MetaLogin auth={auth} setAuth={setAuth} />}
      />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );

  if (auth === true) {
    allowedRoutes = (
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/callback" element={<SearchBar setAuth={setAuth} />} />
        <Route path="/login" element={<MetaLogin setAuth={setAuth} />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    );
  }

  return (
    <>
      <Router>{allowedRoutes}</Router>
      {/*<MetaLogin />*/}
    </>
  );
};

export default App;
