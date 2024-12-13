import React, { useEffect, useState } from "react";
import "./App.css";
import AppContext from "./Context/AppContext";
import Home from "./Home";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [contentBar, setContentBar] = useState(false);
  const values = { sidebar, setSidebar, contentBar, setContentBar };
  return (
    <>
      <AppContext.Provider value={values}>
        <Routes>
          <Route path="/Studydesk/" element={<Login />}></Route>
          <Route path="/Studydesk/Home" element={<Home />}></Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
};

export default App;
