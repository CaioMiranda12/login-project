import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyles/createGlobalStyle';
import MyRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MyRoutes />
    
  </React.StrictMode>
);

