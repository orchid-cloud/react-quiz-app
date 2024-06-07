import React, { useState } from 'react';
import Menu from './components/Menu';
import { GameStateContext } from './assets/helpers/Contexts';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  return (
    <div className="App">
      <h1>Quizz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === 'menu' && <Menu />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
