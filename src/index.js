// import React from 'react';
import "./sass/main.scss";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContext } from "./context/GlobalContext";
import { RendererProvider, ThemeProvider } from "react-fela";
import theme from "./felaConfig/theme";
import { BrowserRouter } from "react-router-dom";
import { createRenderer } from "fela";

const renderer = createRenderer();

ReactDOM.render(
  <BrowserRouter>
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <GlobalContext>
          <App />
        </GlobalContext>
      </ThemeProvider>
    </RendererProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
