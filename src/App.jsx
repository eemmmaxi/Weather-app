import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import All from './Components/All'


function App() {

  const [searchTerm,setSearchTerm] = useState("")
  const [temp, setTemp] = useState("celsius"); // default to celsius
  const [winds, setWinds] = useState("kmh"); // default to celsius
  const [prec, setPrec] = useState("mm"); // default to precipitation

  return (
    <>

      <div className='bg-[#0B0B33] max-w-[1440px] mx-auto'>
        
        < Navbar  temp={temp} setTemp={setTemp} winds={winds} setWinds={setWinds} prec={prec} setPrec={setPrec}/>

        < Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <All searchTerm={searchTerm} temp={temp} winds={winds} prec={prec} />


      </div>

    </>
  )
}

export default App
