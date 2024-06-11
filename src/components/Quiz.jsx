import React from 'react';
import { useState } from 'react';
import { Questions } from '../assets/helpers/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../assets/helpers/Contexts';
import '../App.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState();

  const { score, setScore } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption('optionA');
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption('optionB');
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption('optionC');
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption('optionD');
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}
