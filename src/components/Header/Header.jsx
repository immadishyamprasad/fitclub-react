
import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
        <img className='logo' src={Logo} alt="" />
        <ul className='Header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header