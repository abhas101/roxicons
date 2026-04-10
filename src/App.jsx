import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Hero from './components/Hero.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Icons from './pages/Icons.jsx'



const App = () => {
  return (
    <>

    <div className="appWrapper ">

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path = '/icons' element = {<Icons />} />



    </Routes>
     
    </div>
    
    </>
  )
}

export default App