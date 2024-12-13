import React, { useContext } from "react";
import Navbar from "./componets/Navbar";
import AppContext from "./Context/AppContext";

const Home = () => {
  const { contentBar, setContentBar } = useContext(AppContext);
  const path = location.pathname;
  let currLocation = path.split("/Studydesk").join("home").split("/").join(">");
  // let innerLocation = ;

  return (
    <>
      <div className="h-screen w-screen bg-slate-500/10 dark:bg-slate-950 overflow-hidden">
        <Navbar />
        
       
      </div>
    </>
  );
};

export default Home;
