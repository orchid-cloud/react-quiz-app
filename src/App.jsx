import React, { useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { GameStateContext } from './assets/helpers/Contexts';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quizz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
