import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import UserHome from '../UserHome/UserHome'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <Login />
              <img className='background-image' src='https://www.whitewatervethospital.com/storage/app/media/puppies-and-kittens.jpg'/>
            </>
          )
        }} />
        <Route exact path='/sign-up' render={() => {
          return (
            <>
              <SignUp />
            </>
          )
        }} />
        <Route exact path='/user-home' render={() => {
          return (
            <>
              <UserHome />
            </>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
