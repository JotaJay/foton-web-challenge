import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Routes from "./routes";
import Global from "./styles/global";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
