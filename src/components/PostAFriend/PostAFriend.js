import React, { useState } from 'react';
import './PostAFriend.css'

function PostAFriend() {

  //state
  const [renderQuestionById, setrenderQuestionById] = useState(0);
  const questions = [{ question: 'What\'s your Friend\'s name?', id: 'name', inputType: 'text' }, { question: 'How old are they?', id: 'age', inputType: 'number' }, { question: 'What breed?', id: 'breed', inputType: 'text' }, { question: 'If you could describe them in a short paragraph?', id: 'description', inputType: 'text' }, { question: 'Gender?', id: 'gender', inputType: 'radio', options: ['M', 'F'] }, { question: 'Neutered?', id: 'fixed', inputType: 'radio', options: [true, false] }, { question: 'House trained?', id: 'houseTrained', inputType: 'radio', options: [true, false] }, { question: 'Upload a few photos so we can find your friend a new home!', id: 'photos', inputType: 'text' }, { question: 'Good with kids?', id: 'goodWithKids', inputType: 'radio', options: [true, false]}, { question: 'Good other pets?', id: 'goodWithPets', inputType: 'radio', options: [true, false]}]
  const [newPet, setnewPet] = useState({})
  const [inputValue, setInputValue] = useState('')
  const [radioSelected, setRadioSelected] = useState(null)

  //functions

  function handleTrueFalseLabel(option) {
    if (option === true) {
      return 'Yes'
    } else if (option === false) {
      return 'No'
    } else {
      return option
    }
  }

  function renderQuestion() {
    if(renderQuestionById <= 9){
    return (
      <>
        <p>{questions[renderQuestionById].question}</p>
        <div className='input'>
          {renderInput(questions[renderQuestionById].inputType)}
        </div>
      </>
    )
    } else {
      return (
        <h1>Completed</h1>
      )
    }
  }

  function renderInput(inputType) {
    if (inputType === 'text') {
      return (<input className={inputType} type={inputType} value={inputValue} required onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if (inputType === 'number') {
      return (<input className={inputType} type={inputType} value={inputValue} required onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if (inputType === 'radio') {
      const returnOptions = questions[renderQuestionById].options.map(option => {
        return (
          <div className={inputType} key={option + 'div'}>
            <label key={`${option} label`}>{handleTrueFalseLabel(option)}</label>
            <input className={inputType} name={questions[renderQuestionById].id} type={inputType} value={option} key={option} required onClick={(e) => {setInputValue(e.target.value)}} />
          </div>
        )
      })
      return returnOptions
    }
  }

  function nextQuestion(inputQuestion, event) {
    if(renderQuestionById <= 9 && inputValue !== ''){
      setRadioSelected(null)
      event.preventDefault()
      const updatePet = { ...newPet }
      updatePet[inputQuestion] = inputValue
      setnewPet(updatePet)
      setrenderQuestionById(renderQuestionById + 1)
      setInputValue('');
    }
  }

  return (
    <main>
      <h1>Find your Friend a new Home</h1>
      <form className='question'>
        {renderQuestion()}
        <button className='submit-question' type='submit' onClick={(e) => nextQuestion(questions[renderQuestionById].id, e)}>➤</button>
      </form>
    </main>
  );
}

export default PostAFriend;
