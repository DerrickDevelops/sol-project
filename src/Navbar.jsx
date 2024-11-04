import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'

function Navbar() {

  return (
    <>
    	<img src='' alt='logo' />
      <ul>
      	<li><a href=''>Planets</a></li>
        <li><a href=''>Stars</a></li>
        <li><a href=''>Systems</a></li>
        <li><a href=''>Contact</a></li>
      </ul>
     </>
  )
}

export default Navbar