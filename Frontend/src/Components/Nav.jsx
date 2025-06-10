import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='mb-10 flex justify-center py-4 bg-gray-50 border-b border-gray-200'>
      <div className='flex gap-8'>
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `text-lg font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/products"
          className={({ isActive }) => 
            `text-lg font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          Products
        </NavLink>
        
        <NavLink 
          to="/login"
          className={({ isActive }) => 
            `text-lg font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          Login
        </NavLink>
        
        <NavLink 
          to="/register"
          className={({ isActive }) => 
            `text-lg font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          Register
        </NavLink>
      </div>
    </div>
  )
}

export default Nav