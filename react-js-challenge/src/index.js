import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadastro from './components/cadastro/cadastro'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

reportWebVitals();
