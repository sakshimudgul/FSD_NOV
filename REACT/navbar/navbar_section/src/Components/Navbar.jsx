import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (

<div className='bg-amber-300 flex gap-10 justify-center'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>

</div>

)


}

export default Navbar