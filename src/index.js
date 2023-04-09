import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
axios.defaults.timeout = 1000;

axios.interceptors.request.use(
  function (config) {
    console.log(config.headers);
    config.headers.MyCustomField = 'foobar';
    return config;
  },
  function (error) {
    console.log('interceptors error');
    return Promise.reject(error);
  }
);
const root = ReactDOM.createRoot(document.getElementById('root'));

export const MyContext = React.createContext({});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
