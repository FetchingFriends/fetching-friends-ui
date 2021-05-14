import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import pets from '../../../src/pet.svg'

const Header = () => {

  return (
    <header>
      <h2 className='title'>fetching-friends</h2>
      <img className='logo' src={pets} alt='logo'></img>
    </header>
  )
}

export default Header
