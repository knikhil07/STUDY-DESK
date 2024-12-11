import React, { useEffect, useState } from "react";
import "./App.css";
import AppContext from "./Context/AppContext";
import Home from "./Home";
import Login from "./Pages/Login";
const App = () => {
  
  const values = {};
  return (
    <>
      <AppContext.Provider value={values}>
        <Home/>
        {/* <Login/> */}
      </AppContext.Provider>
    </>
  );
};

export default App;
