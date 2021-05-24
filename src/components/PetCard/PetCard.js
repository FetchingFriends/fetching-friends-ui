import { Link } from 'react-router-dom'
import './PetCard.css'

const petCard = ( {pet} ) => {
  return(
    <Link to={`/pet/${pet.id}`} style={{textDecoration:'none'}}>
      <div className="card">
        <p>{pet.name}</p>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breed}</p>
        <p>{pet.gender}</p>
      </div>
    </Link>

  )
}

export default petCard;
