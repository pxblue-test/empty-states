import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/themes/react';
require('typeface-open-sans');

render(
  <MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
  , document.getElementById('root')
);
