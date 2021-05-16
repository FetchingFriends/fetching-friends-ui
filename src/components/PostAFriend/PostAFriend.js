import React, { useState } from 'react';
import './PostAFriend.css'

function PostAFriend() {

  function handleTrueFalseLabel(option) {
    if(option === true) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  function renderQuestion() {
    return (
      <>
        <p>{questions[renderQuestionById].question}</p>
        <div className='input'>
        {renderInput(questions[renderQuestionById].inputType)}
        </div>
      </>
    )
  }
  const [inputValue, setInputValue] = useState('')

  function renderInput(inputType) {
    if(inputType === 'text') {
      return (<input className={inputType} type={inputType} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if(inputType === 'number') {
      return (<input className={inputType} type={inputType} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if(inputType === 'radio') {
      const returnOptions = questions[renderQuestionById].options.map(option => {
        return (
          <div className={inputType}>
          <label key={`${option} label`}>{handleTrueFalseLabel(option)}</label>
          <input className={inputType} name={questions[renderQuestionById].id} type={inputType} value={option} key={option} onClick={(e) => {setInputValue(e.target.value)}}/>
          </div>
        )
      })
      return returnOptions
    }  else if(inputType === 'checkbox') {
      const returnOptions = questions[renderQuestionById].options.map(option => {
        return (
          
          <div className={inputType}> 
          <label key={`${option} label`}>{option}</label>
          <input className={inputType} name={questions[renderQuestionById].id} type={inputType} value={option} key={option} onClick={(e) => {setInputValue(e.target.value)}}/>
          </div>
        )
      })
      return returnOptions
    }
  }

  const [renderQuestionById, setrenderQuestionById] = useState(0);
  const questions = [{ question: 'What\'s your Friend\'s name?', id: 'name', inputType:'text'}, { question: 'How old are they?', id: 'age', inputType:'number'}, {question:'What breed?', id:'breed', inputType:'text'}, {question: 'If you could describe them in a short paragraph?', id:'description', inputType:'text'}, {question:'Gender?', id:'gender', inputType:'radio', options:['M', 'F']}, {question: 'Neutered?', id:'fixed', inputType:'radio', options:[true, false]}, {question: 'House trained?', id:'houseTrained', inputType:'radio', options:[true, false]}, {question:'Upload a few photos so we can find your friend a new home!', id:'photos', inputType:'text'}, {question: 'Good with kids or other friends?', id:'goodWith', inputType:'checkbox', options:['Kids', 'Pets']}]
  const [newPet, setnewPet] = useState({})

  function nextQuestion(inputQuestion) {
    const updatePet = {...newPet}
    updatePet[inputQuestion] = inputValue
    setnewPet(updatePet)
    setrenderQuestionById(renderQuestionById + 1)
    setInputValue('');
  }

  return (
    <main>
      <h1>Find your Friend a new Home</h1>
      <div className='question'>
        {renderQuestion()}
      </div>
      <button className='submit-question' type='submit' onClick={() => nextQuestion(questions[renderQuestionById].id)}>➤</button>
    </main>
  );
}

export default PostAFriend;
