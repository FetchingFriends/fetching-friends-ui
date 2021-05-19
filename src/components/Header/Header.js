import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import pets from '../../../src/pet.svg'

const Header = () => {

  return (
    <header>
      <div className='title-logo'>
        <h2 className='title'>fetching-friends</h2>
        <img className='logo' src={pets} alt='logo'></img>
      </div>
      <button className='sign-up-button'>Sign Up</button>
    </header>
  )
}

export default Header
