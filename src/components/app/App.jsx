import React from "react";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../../theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <Main />
          <GlobalStyle />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
