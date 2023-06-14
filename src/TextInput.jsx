import React, { useState } from 'react';

function TextInput({ setFlashcardData, setIsCardDisplayed }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handlePaste = () => {
    try {
      const parsedData = JSON.parse(inputText);
      setFlashcardData(parsedData);
      setIsCardDisplayed(true); // Switch to Cards component after setting new flashcard data
    } catch (error) {
      console.error('Invalid JSON format');
    }
  };

  return (
    <div>
      <input
        placeholder="Paste JSON here"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handlePaste}>Create Flashcards</button>
    </div>
  );
}

export default TextInput;
