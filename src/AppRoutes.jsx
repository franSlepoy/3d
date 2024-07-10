import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Proyectos from './components/pages/proyectos/Proyectos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
  );
};

export default AppRoutes;
