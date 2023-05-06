import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import GamePage  from './components/game/GamePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes >
      <Route path="/JKportfolio/" element={<App />}/>
      <Route path="/JKportfolio/game" element={<GamePage />}/>
    </Routes>
  </Router>
);

reportWebVitals();
