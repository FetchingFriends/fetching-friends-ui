import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Login />
      <img className='background-image' src='https://www.whitewatervethospital.com/storage/app/media/puppies-and-kittens.jpg'/>
    </div>
  );
}

export default App;
