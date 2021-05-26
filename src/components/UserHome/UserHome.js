import React from 'react'
import './UserHome.css'
import { connect } from 'react-redux';
import PetCard from '../PetCard/PetCard.js'
import { Link } from 'react-router-dom'
import favoriteFilled from '../../img/favorite-filled.png'


const UserHome = (props) => {
  const { isLoading, selectedUser, errorMsg } = props
  console.log(selectedUser)
  return (
    <>
      {isLoading && <h2>Loading...</h2> }
      {!isLoading && errorMsg && <div className='error'>
          <h2>{errorMsg}</h2>
          <Link to='/'>
            <button className='button'>Login</button>
          </Link>
        </div>}
      {selectedUser.data && <section>
        {selectedUser.data && <h2 className='username'>Welcome {selectedUser.data.attributes.username}!</h2>}
        <div className='user-pets'>
          <section className='my-pets'>
            <h2>My Friends</h2>
              {!selectedUser.data.attributes.pets.length && <h4>You have not submitted any friends!</h4>}
              {selectedUser.data && <div className="pet-display friends">{selectedUser.data.attributes.pets.map(pet => {
                return(
                  <PetCard pet={pet} />
                )
              })}</div>}
          </section>
          <section className='favorite-pets'>
            <h2>Favorited Friends</h2>
              {!selectedUser.data.attributes.favorites.length && <h4>You have not favorited any friends yet!</h4>}
                {selectedUser.data && <div className="pet-display favorites">{selectedUser.data.attributes.favorites.map(pet => {
                 return(
                   <PetCard pet={pet} favoritedImg={favoriteFilled} />
                 )
              })}</div>}
          </section>
        </div>
        <section className='find-post-pet'>
          <div>
            <h2 className='find'>Find New Friend</h2>
            <h3>What are you looking for?</h3>
            <div className='search-buttons'>
            <Link to={`/all-pets/dogs`} style={{textDecoration:'none'}}>
              <button className='search dog button'>Dog</button>
            </Link>
            <Link to={`/all-pets/cats`} style={{textDecoration:'none'}}>
              <button className='search cat button'>Cat</button>
            </Link>
            <Link to={`/all-pets/others`} style={{textDecoration:'none'}}>
              <button className='other button'>Other</button>
            </Link>
            </div>
          </div>
          <div>
            <h2 className='pending'>Pending Applications</h2>
            <Link to='/applications'>
              <button className='pend button'>Applications</button>
            </Link>
          </div>
          <div>
            <h2 className='post'>Post Friend for Adoption</h2>
            <Link to='post-a-friend'>
              <button className='posting button'>Post Friend</button>
            </Link>
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
