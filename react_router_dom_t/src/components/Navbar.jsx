import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const base = 'text-white font-medium'
    const active = 'text-yellow-500'
    // const activeClass = ({isActive})=> isActive ? 'text-yellow-500' : 'text-white'
    const activeClass = ({isActive})=> `${base} ${isActive? active : ' '}`
  return (
    <div className='bg-cyan-900 w-full flex items-center justify-evenly '>
      <NavLink to="/" className={activeClass}>Home</NavLink>
      <NavLink to="/about" className={activeClass}>About</NavLink>
      <NavLink to="/contact" className={activeClass}>Contact</NavLink>
      <NavLink to="/help" className={activeClass}>Help</NavLink>
    </div>
  )
}

export default Navbar
