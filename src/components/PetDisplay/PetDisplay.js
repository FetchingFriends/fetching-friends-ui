import './PetDisplay.css'
import PetCard from '../PetCard/PetCard.js'

const PetDisplay = ( {petsToDisplay} ) => {
  let petGrid = petsToDisplay.map(pet => {
    return (
      <PetCard pet={pet} />
    )
  })
  

  return(
    <div className="pet-display">{petGrid}</div>
  )
}

export default PetDisplay;