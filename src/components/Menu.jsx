import React from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../assets/helpers/Contexts';
import '../App.css';

export default function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name:</label>
      <input
        type="text"
        placeholder="John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
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
