/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App';
import GlobalStyle from './global.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <HelmetProvider>
      <Helmet />
      {/* </Helmet> */}
    </HelmetProvider>
    <GlobalStyle />
    <App />
  </>,
);
