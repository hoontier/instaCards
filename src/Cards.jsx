import React, { useState } from 'react';
import cardsData from './assets/cardsData.json';
import "./Cards.css";

function Card() {
  const [flashcard, setFlashcard] = useState(cardsData[0]);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBack = () => {
    const currentIndex = cardsData.indexOf(flashcard);
    const newIndex = currentIndex === 0 ? cardsData.length - 1 : currentIndex - 1;
    setFlashcard(cardsData[newIndex]);
    setIsFlipped(false);
  };

  const handleNext = () => {
    const currentIndex = cardsData.indexOf(flashcard);
    const newIndex = currentIndex === cardsData.length - 1 ? 0 : currentIndex + 1;
    setFlashcard(cardsData[newIndex]);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <p>{isFlipped ? flashcard.Definition : flashcard.Term}</p>
      </div>
      <div className="buttons">
        <button className="back-button" onClick={handleBack}>Back</button>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Card;
