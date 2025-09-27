import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import All from './Components/All'


function App() {

  return (
    <>

      <div className='bg-[#0B0B33] '>
        
        < Navbar  />

        < Hero />

        <All />


      </div>

    </>
  )
}

export default App
