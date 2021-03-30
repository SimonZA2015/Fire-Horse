import React from "react";
import Content from "./data/components/Content/Content";
import Header from "./data/components/Header/Header";
import Navbar from "./data/components/Navbar/Navbar";
import BottomNavbar from "./data/components/BottomNavbar/BottomNavbar";

import './App.css';

function App(props) {

  return (
      <div className="App">
          <Header props={props} />
          <Navbar props={props}/>
          <Content props={props} />
          <BottomNavbar props={props} />
      </div>
  );
}

export default App;
