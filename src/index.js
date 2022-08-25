import React from 'react';
import ReactDOM from 'react-dom/client';
import GarapinWeb from './garapin.js';

const webbody = document.getElementById('GarapInWebBody');
const root = ReactDOM.createRoot(webbody);
root.render(
  <React.StrictMode>
    <GarapinWeb  />
  </React.StrictMode>
);
