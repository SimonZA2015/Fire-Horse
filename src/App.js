import React, {useState} from "react";
import Content from "./data/components/Content/Content";
import Header from "./data/components/Header/Header";
import Navbar from "./data/components/Navbar/Navbar";
import BottomNavbar from "./data/components/BottomNavbar/BottomNavbar";
import Popouts from "./data/popouts/Popouts";

import './App.css';

function App(props) {

    const [menuPop, setMenuPop] = useState(false);

  return (
      <div className="App">
          <Header props={props} />
          <Navbar props={props}/>
          <Content props={props} />
          <BottomNavbar props={props} menu={menuPop} setMenu={setMenuPop} />
          <Popouts dispatch={props.dispatch} menuPop={menuPop} setMenuPop={setMenuPop} />
      </div>
  );
}

export default App;
