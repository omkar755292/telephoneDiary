import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/*' element={<Authentication />} />
          <Route exact path='/home/*' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;