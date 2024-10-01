import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <h1 className='header'>The Sol System</h1>
    <p className='sub-header'>Welcome, please select a planet.</p>
    <div className='planet-selection'>
        <button id='mercury'>mercury</button>
        <button id='venus'>venus</button>
        <button id='earth'>earth</button>
        <button id='mars'>mars</button>
        <button id='jupiter'>jupiter</button>
        <button id='saturn'>saturn</button>
        <button id='uranus'>uranus</button>
        <button id='neptune'>neptune</button>
        </div>
     </>
  )
}

export default App
