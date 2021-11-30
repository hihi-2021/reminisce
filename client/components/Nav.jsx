import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to="/concerts"><h2 className='concerts-nav-link'>Concerts</h2></Link>
      <Link to='/travels'><h2 className='travels-nav-link'>Travels</h2></Link>
    </nav>
  )
}

export default Nav
