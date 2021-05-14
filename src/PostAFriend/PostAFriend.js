import React, { useState } from 'react';
import './PostAFriend.css'

function PostAFriend() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [reRenderH1, setReRenderH1] = useState('name');
  const questions = [{question: 'What\'s your Friend\'s name?', id:'name'}, {question:'How old are they?', id:'age'}, 'What breed?', 'If you could describe them in a short paragraph?', 'Gender?', 'Neutered?', 'House trained?', 'Upload a few photos so we can find your friend a new home!', 'Good with kids or other friends?']

  function nextQuestion(){ 
    setReRenderH1('age')
    renderH1()
  }

  function renderH1() {
    if(reRenderH1 === 'name') {
      return (
        <h1 className='fade-in'>{questions[0].question}</h1>
      )
    } else if(reRenderH1 === 'age') {
      return (
        <h1 className='fade'>{questions[1].question}</h1>
      )
    }
  }

  return (
    <main>
      <h1>Find your Friend a new Home</h1>
      <div className='question'>
        {renderH1()}
        <input type='text' className='input'></input>
      </div>
      <button type='submit' onClick={() => nextQuestion()}></button>
    </main>
  );
}

export default PostAFriend;
