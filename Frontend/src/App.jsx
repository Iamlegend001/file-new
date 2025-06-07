import React from 'react'
import MainRoutes from './Routes/mainRoutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='px-10 bg-black w-screen h-screen text-white'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App