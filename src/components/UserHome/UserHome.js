import React from 'react'
import './UserHome.css'
import { connect } from 'react-redux';
import PetCard from '../PetCard/PetCard.js'
import { Link } from 'react-router-dom'

const UserHome = (props) => {
  const { isLoading, selectedUser, errorMsg } = props
  return (
    <>
      {isLoading && <h2>Loading...</h2> }
      {!isLoading && errorMsg && <div>
          <h2>{errorMsg}</h2>
          <Link to='/'>
            <button className='button'>Login</button>
          </Link>
        </div>}
      {selectedUser.data && <section>
        {selectedUser.data && <h2>Welcome {selectedUser.data.attributes.username}!</h2>}
        <div className='user-pets'>
          <section className='my-pets'>
            <h2>My Friends</h2>
              {selectedUser.data && <div className="pet-display">{selectedUser.data.attributes.pets.map(pet => {
                return(
                  <PetCard pet={pet} />
                )
              })}</div>}
          </section>
          <section className='favorite-pets'>
            <h2>Favorited Friends</h2>
              {selectedUser.data && <div className="pet-display">{selectedUser.data.attributes.favorites.map(pet => {
                return(
                  <PetCard pet={pet} />
                )
              })}</div>}
          </section>
        </div>
        <section className='find-post-pet'>
          <div>
            <h2>Find New Friend</h2>
            <h3>What are you looking for?</h3>
            <div className='search-buttons'>
              <button className='dog button'>Dog</button>
              <button className='cat button'>Cat</button>
              <button className='other button'>Other</button>
            </div>
          </div>
          <div>
            <h2>Post Friend for Adoption</h2>
            <button className='post button'>Post Friend</button>
          </div>
        </section>
      </section>}
    </>
  )
}

export const mapStateToProps = ({ selectedUser, isLoading, errorMsg }) => ({
  selectedUser,
  isLoading,
  errorMsg
})

export default connect(mapStateToProps)(UserHome)
