import React from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../assets/helpers/Contexts';
import { Questions } from '../assets/helpers/Questions';
import '../App.css';

export default function EndScreen() {
  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };
  return (
    <div className="EndScreen">
      <h2>Quiz finished!</h2>
      <h3>{userName}</h3>
      <h2>
        {score} / {Questions.length}
      </h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}
