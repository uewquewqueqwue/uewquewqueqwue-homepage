import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Nopage from './Pages/Nopage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/home' element={<App />}/>
      <Route path='*' element={<Nopage />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
