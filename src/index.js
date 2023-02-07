import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <div className="App">
    <footer>
      This project was created by Vera Pinheiro and is {" "}
    <a href="https://github.com/arevys/weather-react"
    target="_blank">
     open-sourced on Github
    </a>
    </footer>
  </div>
  </React.StrictMode>
);


reportWebVitals();
