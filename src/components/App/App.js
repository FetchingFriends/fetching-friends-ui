import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
<<<<<<< HEAD
import Login from '../Login/Login'
=======
import PostAFriend from '../PostAFriend/PostAFriend';
import { Route, Switch } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import UserHome from '../UserHome/UserHome'
import petData from "../../dummyPetData.js"
import PetDisplay from "../PetDisplay/PetDisplay.js"
import PetCard from "../PetCard/PetCard.js"
import PetInfo from "../PetInfo/PetInfo.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      petsToDisplay: petData
    }
  }

  render() {
    return (
      <div className='App'>
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
          <Route exact path='/all-pets' render={() =>
            <PetDisplay petsToDisplay={this.state.petsToDisplay}/>
          }/>
          <Route exact path='/pet/:id' render={({match}) =>
          <PetInfo id={ match.params.id } pets={ this.state.petsToDisplay }/>
        }/>
        </Switch>
      </div>
    )
  }
}


export default App;
