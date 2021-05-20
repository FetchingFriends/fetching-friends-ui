import React, { useState } from 'react';
import './PostAFriend.css'

function PostAFriend() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [reRenderH1, setReRenderH1] = useState(false);
  const questions = [{question: 'What\'s your Friend\'s name?', id:'name'}, {question:'How old are they?', id:'age'}, 'What breed?', 'If you could describe them in a short paragraph?', 'Gender?', 'Neutered?', 'House trained?', 'Upload a few photos so we can find your friend a new home!', 'Good with kids or other friends?']

  function nextQuestion(){ 
    setCurrentQuestion(currentQuestion + 1)
    setReRenderH1(true)
    setReRenderH1(false)
  }
  function renderH1() {
    if(reRenderH1 === false) {
      return (
        <h1>{questions[currentQuestion].question}</h1>
      )
    }
  }

  return (
    <main>
      <h1>Find your Friend a new Home</h1>
      {renderH1()}
      <div>
      <input type='text'></input>
      <button type='submit' onClick={() => nextQuestion()}></button>
      </div>
    </main>
  );
}

export default PostAFriend;
