import React from 'react'
import { useMarvelContext } from '../../context/MarvelContext'
import './index.css'
const LoadMoreButton = () => {

  const {loadMoreCharacters} = useMarvelContext()
  return (
    <>

  <div className='flex justify-center w-full mb-6'>
    <button className='btn  bg-[#F6F9FE] text-gray-500 drop-shadow-md	w-auto h-9 px-2 rounded-full font-semibold hover:translate-y-[-1px]' onClick={loadMoreCharacters}><span>Load More</span></button>
  </div>
    
    </>
  )
}

export default LoadMoreButton