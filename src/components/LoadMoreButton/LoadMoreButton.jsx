import React from 'react'
import { useMarvelContext } from '../../context/MarvelContext'
import './index.css'
const LoadMoreButton = () => {

  const {loadMoreCharacters} = useMarvelContext()
  return (
    <>

  <div className='flex justify-center w-full mb-6'>
    <button className='bg-[#212121]' onClick={loadMoreCharacters}><span>Load More</span></button>
  </div>
    
    </>
  )
}

export default LoadMoreButton