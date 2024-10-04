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
        <button className='planet' id='mercury'>mercury</button>
        <button className='planet' id='venus'>venus</button>
        <button className='planet' id='earth'>earth</button>
        <button className='planet' id='mars'>mars</button>
        <button className='planet' id='jupiter'>jupiter</button>
        <button className='planet' id='saturn'>saturn</button>
        <button className='planet' id='uranus'>uranus</button>
        <button className='planet' id='neptune'>neptune</button>
        </div>
        <footer>
          <p>Have a question?</p>
          <button>Contact Us!</button>
          </footer>
     </>
  )
}

export default App
