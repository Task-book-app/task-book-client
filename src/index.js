import "./sass/main.scss";
import ReactDOM from "react-dom";
import { GlobalContext } from "./context/GlobalContext";
import { RendererProvider, ThemeProvider } from "react-fela";
import theme from "./felaConfig/theme";
import { createRenderer } from "fela";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import prefixer from "fela-plugin-prefixer";
import webPreset from "fela-preset-web";

const renderer = createRenderer({ plugins: [...webPreset, prefixer()] });
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
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <GlobalContext>
          <App />
        </GlobalContext>
      </ThemeProvider>
    </RendererProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
