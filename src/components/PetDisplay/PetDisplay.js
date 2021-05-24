import './PetDisplay.css'
import PetCard from '../PetCard/PetCard.js'
import FilterForm from '../FilterForm/FilterForm'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import PetInfo from '../PetInfo/PetInfo'


class PetDisplay extends Component {
  constructor({type, filterPets}) {
    super();
    this.state = {
      petsToDisplay: []
    }
  }

  componentDidMount() {
    fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pets?type=${this.props.type}`)
    .then(res => res.json())
    .then(response => this.setState({petsToDisplay: response.data }))
  }
  
    filterPets = (input, e) => {
    e.preventDefault()
   let filteredPets = this.state.petsToDisplay.filter(pet => {
     if(input.age !== '' && parseInt(input.age) !== pet.attributes.age) {
       return false;
      }
     if(input.gender !== '' && input.gender !== pet.attributes.gender) {
       return false;
     }
     if(input.fixed !== '' && ((input.fixed === "true" && pet.attributes.fix === false) || (input.fixed === "false" && pet.attributes.fix === true)) ) {
       return false;
     } 
     return true;
   })
   this.setState({petsToDisplay: filteredPets})
  }

  render() {
    let petGrid = this.state.petsToDisplay.map(pet => {
        return (
          <PetCard pet={pet} />
        )
      })
    return(
      <>
        <FilterForm filterPets={this.filterPets} />
        <div className="pet-display">{petGrid}</div>
      </>
    )
  }
}

export default PetDisplay;