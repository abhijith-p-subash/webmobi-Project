import react, { useState } from "react";
import LeftSideBar from "./components/SideBarLeft/sideBarLeft";
import RightSideBar from "./components/SideBarRight/sideBarRight";
import Header from "./components/Header/header";
import Body from "./components/Body/body";



function App() {
  const [window, setWindow] = useState(true);

  const toggle = (status) => {
    setWindow(status);

  }

  console.log(window);
  return (
    <div>
      <LeftSideBar
      toggle={toggle}
      status={window}
      />
      <RightSideBar />
      <Header />
      {window ?  <Body toggle={toggle} /> : ""}
     
    </div>
  );
}

export default App;
