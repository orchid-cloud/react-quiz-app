import React from 'react';
import '../App.css';

export default function Menu() {
  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name:</label>
      <input type="text" placeholder="John Smith" />
      <button>Start Quiz</button>
    </div>
  );
}
