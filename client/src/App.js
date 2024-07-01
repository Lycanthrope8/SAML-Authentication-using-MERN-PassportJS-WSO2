import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import useAuth from './hooks/useAuth';

function App() {
  const { authenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/home" element={authenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/" element={<Login authenticated={authenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
