// import React from 'react';
import "./sass/main.scss";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContext } from "./context/GlobalContext";
import { RendererProvider, ThemeProvider } from "react-fela";
import theme from "./felaConfig/theme";
import { BrowserRouter } from "react-router-dom";
import { createRenderer } from "fela";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const renderer = createRenderer();
// console.log(process.env.REACT_APP_API_BASE);

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_BASE,
  cache: new InMemoryCache(),
  credentials: "include",
  name: "Tasks Book App",
  version: "1",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={theme}>
          <GlobalContext>
            <App />
          </GlobalContext>
        </ThemeProvider>
      </RendererProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
