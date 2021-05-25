import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './PostAFriend.css'

function PostAFriend() {

  //state
  const [renderQuestionById, setrenderQuestionById] = useState(0);
  const questions = [{ question: 'What\'s your Friend\'s name?', id: 'name', inputType: 'text' }, { question: 'How old are they?', id: 'age', inputType: 'number' }, { question: 'What breed?', id: 'breed', inputType: 'text' }, { question: 'If you could describe them in a short paragraph?', id: 'description', inputType: 'text' }, { question: 'Gender?', id: 'gender', inputType: 'radio', options: ['M', 'F'] }, { question: 'Neutered?', id: 'fixed', inputType: 'radio', options: [true, false] }, { question: 'House trained?', id: 'houseTrained', inputType: 'radio', options: [true, false] }, { question: 'Upload a photo so we can find your friend a new home!', id: 'photo_url_1', inputType: 'file' }, { question: 'Good with kids?', id: 'goodWithKids', inputType: 'radio', options: [true, false] }, { question: 'Good other pets?', id: 'goodWithPets', inputType: 'radio', options: [true, false] }]
  const [newPet, setnewPet] = useState({})
  const [inputValue, setInputValue] = useState('')

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
    if (renderQuestionById <= 9) {
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
        <>
          <h4>Confirm your information</h4>
          <div className="pet-info">
            <img src={newPet.photo_url_1} alt="Pet" className="pet-image" />
            <h1 className="bio">"{newPet.description}"</h1>
            <br></br>
            <p>Name: {newPet.name}</p>
            <p>Age: {newPet.age}</p>
            <p>Breed: {newPet.breed}</p>
            <p>Gender: {newPet.gender}</p>
            {console.log(newPet)}
          </div>
        </>
      )
    }
  }

  function renderInput(inputType) {
    if (inputType === 'text') {
      return (<input className={inputType} type={inputType} value={inputValue} required onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if (inputType === 'file') {
      return (<input accept="image/gif, image/jpeg, image/png" name="image" id="file" className={inputType} type={inputType} required onChange={(e) => setInputValue(URL.createObjectURL(e.target.files[0]))}></input>)
    } else if (inputType === 'number') {
      return (<input className={inputType} type={inputType} value={inputValue} required onChange={(e) => setInputValue(e.target.value)}></input>)
    } else if (inputType === 'radio') {
      const returnOptions = questions[renderQuestionById].options.map(option => {
        return (
          <div className={inputType} key={option + renderQuestionById}>
            <label key={`${option} label`}>{handleTrueFalseLabel(option)}</label>
            <input className={inputType} name={questions[renderQuestionById].id} type={inputType} value={option} key={option} required onClick={(e) => { setInputValue(e.target.value) }} />
          </div>
        )
      })
      return returnOptions
    }
  }

  function nextQuestion(inputQuestion, event) {
    console.log(renderQuestionById)
    if (renderQuestionById <= 9 && inputValue !== '') {
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
      <form className='question fade'>
        {renderQuestion()}
        {renderQuestionById <= 9 && <button className='submit-question' type='submit' onClick={(e) => nextQuestion(questions[renderQuestionById].id, e)}>➤</button>}
        {renderQuestionById === 10 && <button className='completed-question' type='submit' onClick={(e) => {
          e.preventDefault()
          console.log('submitted')
        }}>Complete</button>}
      </form>
      <Link to={'/homepage'}>
        <button className='back-button'>Back To Home</button>
      </Link>
    </main>
  );
}

export default PostAFriend;
