import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Error404 from './pages/error404';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="error" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
