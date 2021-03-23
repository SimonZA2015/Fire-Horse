import React from "react";
import Content from "./data/components/Content/Content";
import Header from "./data/components/Header/Header";
import Navbar from "./data/components/Navbar/Navbar";

import './App.css';

function App(props) {
  return (
      <div className="App">
          <Header />
          <Navbar />
          <Content messagesList={props.messagesList} profileInfo={props.profileInfo} />
      </div>
  );
}

export default App;
