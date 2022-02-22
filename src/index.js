// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { GlobalContext } from './context/GlobalContext'
import { RendererProvider, ThemeProvider } from 'react-fela'
// import '@fortawesome/fontawesome-free/js/all.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import renderer from './felaConfig/renderer'
import theme from './felaConfig/theme'


ReactDOM.render(
  <GlobalContext>
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </RendererProvider>
  </GlobalContext>,
  document.getElementById('root')
);


