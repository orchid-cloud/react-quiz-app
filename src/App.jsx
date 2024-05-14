import React, { useState } from 'react';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {gameState === 'menu' && <Menu />}
    </div>
  );
}

export default App;
