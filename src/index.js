import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router } from 'react-router-dom';
// 本地模块
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'lib-flexible'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
            <App />
      </Router>
    </React.StrictMode>
);

reportWebVitals();
