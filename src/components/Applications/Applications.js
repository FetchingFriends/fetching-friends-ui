import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux';
import { updatePetStatus } from '../../../src/apiCalls'

const Applications = (props) => {

  const updateStatus = (event, id) => {
    const petStatus = event.target.value
    if(petStatus === 'Interested') {
      petStatus = 'interested'
    }
    if(petStatus === 'Denied') {
      petStatus = 'denied'
    }
    const updateStatus = {
      status: petStatus
    }
    updatePetStatus(id, updateStatus)
  }

  return (
    <>
      {props.selectedUser.data && <h2>{props.selectedUser.data.attributes.username}'s Pending Applications!</h2>}
      <div className='user-pets'>
        <section className='my-pets'>
          <h2>My Applications Pending For Other Pets</h2>
            {!props.selectedUser.data.attributes.applications.length && <h4>No Pending Applications!</h4>}
            {props.selectedUser.data && <div className="pet-display">{props.selectedUser.data.attributes.applications.map(pet => {
              return(
                <div className='application-card'>
                  <p>Name: {pet.pet_name}</p>
                  <p>Status: {pet.status}</p>
                  <p>Why They Want The Pet: {pet.description}</p>
                </div>
              )
            })}</div>}
        </section>
        <section className='favorite-pets'>
          <h2>Applications Pending With My Pets</h2>
            {!props.selectedUser.data.attributes.favorites.length && <h4>You have not favorited any friends yet!</h4>}
            {props.selectedUser.data && <div className="pet-display">{props.selectedUser.data.attributes.pet_applications.map(pet => {
              return(
                <div className='application-card'>
                  <p>Name: {pet.pet_name}</p>
                  <p>Status: {pet.status}</p>
                  <p>Why I Want The Pet: {pet.description}</p>
                  <button className='application-button' value='interested' onClick={(event) => updateStatus(event, pet.id)}>Interested</button>
                  <button className='application-button' value='denied' onClick={(event) => updateStatus(event, pet.id)}>Deny</button>
                </div>
              )
            })}</div>}
        </section>
      </div>
    </>
  )
}

export const mapStateToProps = ({ selectedUser }) => ({
  selectedUser
})

export default connect(mapStateToProps)(Applications)
