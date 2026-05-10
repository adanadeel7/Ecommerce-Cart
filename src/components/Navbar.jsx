import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-10 py-6 bg-gray-900 text-white'> 
         <div className='flex gap-6 '>
         
           
                <Link to='/' className='cursor-pointer hover:text-gray-300'> Home</Link>
                <Link to='/contact' className='cursor-pointer hover:text-gray-300'>Contact</Link>
                <Link to='/' className='cursor-pointer hover:text-gray-300'> Docs </Link>
        
        </div>
        
         
          
          <div className='flex gap-6 '>
            <Link to='/login'className='cursor-pointer hover:text-gray-300' >Log in</Link>
            <Link to='/cart' className='cursor-pointer hover:text-gray-300'> Cart</Link>
          </div>
        
    </div>
  )
}

export default Navbar