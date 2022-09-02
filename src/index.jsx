import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('widget-root'));
const config = document.getElementById('widget-root').getAttribute('config');
console.log('config', JSON.parse(config));
root.render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>,
);
