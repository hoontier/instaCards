import React, { useState } from 'react';
import Card from './Cards';
import TextInput from './TextInput';

import './App.css';

function App() {
  const [isCardDisplayed, setIsCardDisplayed] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Cards');
  const [flashcardData, setFlashcardData] = useState([]);

  const handleSwitchClick = () => {
    setIsCardDisplayed(!isCardDisplayed);
    setPlaceholderText(isCardDisplayed ? 'Cards' : 'Text Input');
  };

  const handleNewCardsClick = () => {
    setIsCardDisplayed(true); // Switch to Cards component
  };
  

  return (
    <div>
      <button className="switcher" onClick={handleSwitchClick}>
        {placeholderText}
      </button>
      {!isCardDisplayed ? (
        <TextInput
          setFlashcardData={setFlashcardData}
          setIsCardDisplayed={setIsCardDisplayed}
        />
      ) : (
        <>
          <Card flashcardData={flashcardData} />
          <button className="new-cards-button" onClick={handleNewCardsClick}>
            New Cards
          </button>
        </>
      )}
    </div>
  );
}

export default App;


