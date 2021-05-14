import { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
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
      <>
        <Route exact path='/' render={() => 
          <PetDisplay petsToDisplay={this.state.petsToDisplay}/>
        }/>
        <Route exact path='/pet/:id' render={({match}) => 
          <PetInfo id={ match.params.id } pets={ this.state.petsToDisplay }/>
        }/>
      </>
    )
  }
}


export default App;
