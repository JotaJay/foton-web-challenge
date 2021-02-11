import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Global from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
};

export default App;
