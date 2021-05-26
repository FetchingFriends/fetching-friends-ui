import './PetDisplay.css'
import PetCard from '../PetCard/PetCard.js'
import FilterForm from '../FilterForm/FilterForm'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getPetsToDisplay } from '../../actions'

class PetDisplay extends Component {
  constructor({type, filterPets, props}) {
    super();
    this.state = {
      allPets: [],
      petsToDisplay: []
    }
  }

  componentDidMount() {
    fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pets?type=${this.props.type}`)
    .then(res => res.json())
    .then(response => this.setState({allPets: response.data, petsToDisplay: response.data}))
  }

    filterPets = (input, e) => {
    e.preventDefault()
   let filteredPets = this.state.allPets.filter(pet => {
     if(input.age !== '' && parseInt(input.age) !== pet.attributes.age) {
       return false;
      }
     if(input.gender !== '' && input.gender !== pet.attributes.gender && ((input.gender === "Male" && pet.attributes.gender === "female") || (input.gender === "Female" && pet.attributes.gender === "male"))) {
       return false;
     }
     if(input.fixed !== '' && ((input.fixed === "true" && pet.attributes.fixed === false) || (input.fixed === "false" && pet.attributes.fixed === true)) ) {
       return false;
     }
     if(input.trained !== '' && ((input.trained === "true" && pet.attributes.house_trained === false) || (input.trained === "false" && pet.attributes.house_trained === true)) ) {
       return false;
     }
     if(input.kids !== '' && ((input.kids === "true" && pet.attributes.good_with_kids === false) || (input.kids === "false" && pet.attributes.good_with_kids === true)) ) {
       return false;
     }
     if(input.animals !== '' && ((input.animals === "true" && pet.attributes.good_with_animals === false) || (input.animals === "false" && pet.attributes.good_with_animals === true)) ) {
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
        <Link to={`/homepage`} style={{textDecoration:'none'}}>
          <button className="button">Back</button>
        </Link>

      </>
    )
  }
}
  export default PetDisplay;
