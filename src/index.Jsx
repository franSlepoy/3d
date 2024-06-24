// src/index.jsx

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Proyectos from './components/pages/proyectos/Proyectos';
import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
