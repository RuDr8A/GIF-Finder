import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>

      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/collection' element = {<Collection/>}/>
      </Routes>

      
    </div>
  )
}

export default App
