import React from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../assets/helpers/Contexts';
import '../App.css';

export default function Menu() {
  const { gameState, setGameState } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name:</label>
      <input type="text" placeholder="John Smith" />
      <button
        onClick={() => {
          setGameState('playing');
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
