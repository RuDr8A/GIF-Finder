import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>

      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/collection' element = {<Collection/>}/>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
