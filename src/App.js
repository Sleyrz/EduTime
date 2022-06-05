import './App.css';
import Navbar from "./Components/navbar";
import React from "react";
import StartPage from "./Components/frontpage";
import Review from "./Components/review";
import Teachers from "./Components/teachers";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Logo from "./Components/logo";


function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <Logo/>
          <StartPage/>
          <Review/>
          <Teachers/>
          <Contact/>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
