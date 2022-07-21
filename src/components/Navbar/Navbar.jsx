import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Link to={'/'}>
      <h1 className='logo'>LOGO.</h1>
    </Link>
  )
}

export default Navbar