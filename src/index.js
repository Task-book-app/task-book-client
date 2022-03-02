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
    <GlobalContext>
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RendererProvider>
    </GlobalContext>
  </BrowserRouter>,
  document.getElementById("root")
);
