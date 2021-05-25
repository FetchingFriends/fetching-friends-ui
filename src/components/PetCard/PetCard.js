import { Link } from 'react-router-dom'
import './PetCard.css'

const petCard = ( { pet } ) => {
  return(
    <Link to={`/pet/${pet.attributes.pet_type}/${pet.id}`} style={{textDecoration:'none'}}>
      <div className="card">
      <img src={pet.attributes.photo_url_1} alt="Pet" className="card-image"/>
      </div>
    </Link>
  )
}

export default petCard;
