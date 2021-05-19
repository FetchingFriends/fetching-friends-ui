import { Link } from 'react-router-dom'
import './PetCard.css'

const petCard = ( {pet} ) => {
  return(
    <Link to={`/pet/${pet.id}`} style={{textDecoration:'none'}}>
      <div className="card">
        <p>{pet.attributes.name}</p>
        <p>Age: {pet.attributes.age}</p>
        <p>Breed: {pet.attributes.breed}</p>
        <p>{pet.attributes.gender}</p>
      </div>  
    </Link>
    
  )
}

export default petCard;