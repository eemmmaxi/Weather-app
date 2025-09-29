import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import All from './Components/All'


function App() {

  const [searchTerm,setSearchTerm] = useState("")

  return (
    <>

      <div className='bg-[#0B0B33] '>
        
        < Navbar  />

        < Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <All searchTerm={searchTerm} />


      </div>

    </>
  )
}

export default App
