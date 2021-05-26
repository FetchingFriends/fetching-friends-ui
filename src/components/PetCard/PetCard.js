import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './PetCard.css'
import { connect } from 'react-redux'
import favoriteClear from '../../img/favorite-clear.png'

const PetCard = (props) => {

  const removeFavorite = (e) => {
    for (var i = 0; i < props.selectedUser.data.attributes.favorites.length; i++) {
      if (e.target.id == props.selectedUser.data.attributes.favorites[i].id) {
        props.selectedUser.data.attributes.favorites.splice(i, 1);
      }
  }
  }

  return (
    <Link to={`/pet/${props.pet.id}`} style={{ textDecoration: 'none' }}>
      <div className='card' key={props.pet.id}>
        <img src={props.favoritedImg ? props.favoritedImg : favoriteClear} className='favorite-button' id={props.pet.id} onClick={(e) => {
          e.preventDefault()
          if (!props.selectedUser.data.attributes.favorites.includes(props.pet)) {
            props.selectedUser.data.attributes.favorites.push(props.pet)
          } else if (props.selectedUser.data.attributes.favorites.includes(props.pet)) {
            removeFavorite(e)
          }
        }}></img>
        <img src={props.pet.attributes.photo_url_1} alt="Pet" className="card-image" />
      </div>
    </Link>
  )
}

export const mapStateToProps = ({ selectedUser }) => ({
  selectedUser
})
export default connect(mapStateToProps)(PetCard);
