import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/config/var.css';
import './css/config/reset.css';
import './css/config/util.css';
import './css/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
