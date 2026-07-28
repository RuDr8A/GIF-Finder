import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className='flex items-start justify-between bg-blue-500 py-5 px-10'>
            <h2 className='text-2xl font-semibold'>Media Search</h2>
            <div className='flex items-center gap-9'>
                <Link to = '/' className='text-xl font-semibold'>Search</Link>
                <Link to = '/collection' className='text-xl font-semibold'>Collection</Link>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar
