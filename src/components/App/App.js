import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import PostAFriend from '../PostAFriend/PostAFriend';
import { Route, Switch } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import UserHome from '../UserHome/UserHome'
import petData from "../../dummyPetData.js"
import PetDisplay from "../PetDisplay/PetDisplay.js"
import PetCard from "../PetCard/PetCard.js"
import PetInfo from "../PetInfo/PetInfo.js"
import { connect } from 'react-redux';
import { getAnimals } from '../../apiCalls'
import Applications from '../Applications/Applications'
import ApplicationForm from '../ApplicationForm/ApplicationForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dogs: [],
      cats: [],
      other: []
    }
  }

  componentDidMount() {
    getAnimals('dogs')
      .then(data => this.setState({ dogs: data.data }))
    getAnimals('cats')
      .then(data => this.setState({ cats: data.data }))
    getAnimals('other')
      .then(data => this.setState({ other: data.data }))
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Login setLoginValue={this.setLoginValue} />
                <img className='background-image' src='https://www.whitewatervethospital.com/storage/app/media/puppies-and-kittens.jpg' />
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
          <Route exact path='/homepage' render={() => {
            return (
              <>
                <UserHome />
              </>
            )
          }} />
          <Route exact path='/all-pets/dogs' render={() =>
            <PetDisplay type={"dogs"} petsToDisplay={this.state.petsToDisplay} />
          } />
          <Route exact path='/all-pets/cats' render={() =>
            <PetDisplay type={"cats"} petsToDisplay={this.state.petsToDisplay} />
          } />
          <Route exact path='/applications' render={() => {
            return (
              <>
                <Applications />
              </>
            )
          }} />
          <Route exact path='/all-pets/others' render={() =>
            <PetDisplay type={"other"} petsToDisplay={this.state.petsToDisplay} />
          } />
          <Route exact path='/pet/:type/:id' render={({ match }) =>
            <PetInfo id={match.params.id} type={match.params.type} pets={this.state} />
          } />
          <Route exact path='/post-a-friend' render={({ match }) =>
            <PostAFriend />
          } />
<<<<<<< HEAD
          <Route exact path='/application/:id' render={({match}) =>
            <ApplicationForm id={ match.params.id } />
=======
          <Route exact path='/application/:id/:name' render={({match}) =>
            <ApplicationForm id={ match.params.id } name={ match.params.name } />
>>>>>>> main
          }/>
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = ({ petsToDisplay }) => ({
  petsToDisplay
}
)

export default App
