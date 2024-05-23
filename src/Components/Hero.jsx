import React from 'react'
import machine from '../assets/machine.png'

const Hero = () => {
  return (
    <div style={{backgroundColor: '#543310'}}>
      <img src={machine} alt="coffe" 
      style={{
        width: '95%',
        height: '700px',
        marginLeft: '60px',
      }}/>
    </div>
  )
}

export default Hero
