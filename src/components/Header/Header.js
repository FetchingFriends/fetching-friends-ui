import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import pets from '../../../src/pet.svg'
import { connect } from 'react-redux'

const Header = () => {

  const location = useLocation().pathname;

  return (
    <header>
      <Link to='/' className='title-logo'>
        <h2 className='title'>fetching-friends</h2>
        <img className='logo' src={pets} alt='logo'></img>
      </Link>
      {location === '/' && <Link to='/sign-up'>
        <button className='sign-up-button'>Sign Up</button>
      </Link>}
    </header>
  )
}

export default Header
