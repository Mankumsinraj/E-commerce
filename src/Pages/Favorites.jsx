import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Favorites = () => {
  return (
    <div className='w-full h-screen  bg-blue flex justify-center items-center'>
      <div className='space-y-5 flex flex-col justify-center items-center'>
        <h1 className='text-xl font-semibold'>You don't have any favorites Products</h1>
        <NavLink to='/'>
        <button className='bg-gray-800 text-white px-5 py-2 rounded-0 drop-shadow-xl flex items-center space-x-2'>
          <span>Back to the Shop</span>
          <BsArrowLeft/>
        </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Favorites


