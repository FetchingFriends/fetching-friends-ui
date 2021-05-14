import { Link } from "react-router-dom";
import "./PetInfo.css"


const PetInfo = ( {id, pets} ) => {
  let petMatch = pets.filter(pet => pet.id === id)
  return (
    <div className="info-container">
      <div className="pet-info">
        <img src={petMatch[0].attributes.photo_url_1} alt="Pet" className="pet-image"/>
        <h1 className="bio">"{petMatch[0].attributes.description}"</h1>
        <br></br>
        <p>Name: {petMatch[0].attributes.name}</p>
        <p>Age: {petMatch[0].attributes.age}</p>
        <p>Breed: {petMatch[0].attributes.breed}</p>        
        <p>Gender: {petMatch[0].attributes.gender}</p>
        <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
    </div>
    
  )
}

export default PetInfo