import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainRoute from './routes/Mainroute';
import Currency from './routes/Currency';

const App = () => {
  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
