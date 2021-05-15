import React, { useState } from 'react';
import './PostAFriend.css'
import renderQuestion from './renderQuestion.js'

function PostAFriend() {
  const [reRenderH1, setReRenderH1] = useState('name');
  const questions = [{ question: 'What\'s your Friend\'s name?', id: 'name' }, { question: 'How old are they?', id: 'age' }, {question:'What breed?', id:'breed'}, {question: 'If you could describe them in a short paragraph?', id:'description'}, {question:'Gender?', id:'gender'}, {question: 'Neutered?', id:'fixed'}, {question: 'House trained?', id:'houseTrained'}, {question:'Upload a few photos so we can find your friend a new home!', id:'photos'}, {question: 'Good with kids or other friends?', id:'goodWith'}]

  function nextQuestion() {
    setReRenderH1(questions[0+1].id)
    renderQuestion(reRenderH1, questions)
  }

  return (
    <main>
      <h1>Find your Friend a new Home</h1>
      <div className='question'>
        {renderQuestion(reRenderH1, questions)}
      </div>
      <button className='submit-question' type='submit' onClick={() => nextQuestion()}>➤</button>
    </main>
  );
}

export default PostAFriend;
