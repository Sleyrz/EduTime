import './App.css';
import Navbar from "./Components/navbar";
import React from "react";
import StartPage from "./Components/frontpage";
import Review from "./Components/review";
import Teachers from "./Components/teachers";


function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <StartPage/>
          <Review/>
          <Teachers/>
      </React.Fragment>
  );
}

export default App;
