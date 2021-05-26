import { Link } from "react-router-dom";
import "./PetInfo.css"
import { connect } from 'react-redux'

const PetInfo = ( {id, pets, type}, props) => {

  let allPets = []

  pets.dogs.forEach(dog => allPets.push(dog))
  pets.cats.forEach(cat => allPets.push(cat))
  pets.other.forEach(pet => allPets.push(pet))

  let matchedPet = allPets.filter(pet => pet.id === id && pet.attributes.pet_type === type)


  return (
    <div className="info-container">
      <div className="pet-info">
        <img src={matchedPet[0].attributes.photo_url_1} alt="Pet" className="pet-image"/>
        <h1 className="bio">"{matchedPet[0].attributes.description}"</h1>
        <br></br>
        <p>Name: {matchedPet[0].attributes.name}</p>
        <p>Age: {matchedPet[0].attributes.age}</p>
        {matchedPet[0].attributes.breed &&
        <p>Breed: {matchedPet[0].attributes.breed}</p>}
        <p>Gender: {matchedPet[0].attributes.gender}</p>
        {matchedPet[0].attributes.house_trained &&
        <p>House Trained</p>}
        {matchedPet[0].attributes.good_with_kids &&
        <p>Good With Kids</p>}
        {matchedPet[0].attributes.good_with_animals 
        &&<p>Good With Animals</p>}
         <div className='info-buttons'>
          <Link to={`/homepage`}>
            <button className="button">Home</button>
          </Link>
          <Link to={`/all-pets/${matchedPet[0].attributes.pet_type}s`}>
            <button className="button">All {matchedPet[0].attributes.pet_type}s</button>
          </Link>
          <Link to={`/application/${matchedPet[0].id}/${matchedPet[0].attributes.name}`}>
            <button className="button">I want to adopt!</button>
          </Link>
        </div>
      </div>
    </div>

  )
}


export const mapStateToProps = ({selectedUser }) => ({
  selectedUser
})

export default connect(mapStateToProps)(PetInfo)
