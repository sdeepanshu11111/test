// import components
import Aside from "./components/aside";
import Center from "./components/center";
import Right from "./components/right";

import React, { useState } from "react";

function App() {
  const [navStatus, setNavStatus] = useState(false);

  const navHandler = () => {
    if (navStatus) {
      setNavStatus(false);
    } else {
      setNavStatus(true);
    }
  };

  return (
    <div className="App">
      <Aside navStatus={navStatus} />
      <div onClick={navHandler} id="burger">
        <div class="line1"></div>
        <div class="line1"></div>
        <div class="line1"></div>
      </div>

      <div className="r">
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
