import React from 'react'
import './UserHome.css'
import { connect } from 'react-redux';

const UserHome = () => {
  return (
    <>
      <div className='user-pets'>
        <section className='my-pets'>
          <h2>My Friends</h2>
        </section>
        <section className='favorite-pets'>
          <h2>Favorited Friends</h2>
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
    </>
  )
}

export const mapStateToProps = ({ selectedUser }) => ({
  selectedUser
})

export default connect(mapStateToProps)(UserHome)
