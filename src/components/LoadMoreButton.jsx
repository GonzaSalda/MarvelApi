import React from 'react'
import { useMarvelContext } from '../context/MarvelContext'

const LoadMoreButton = () => {

  const {loadMoreCharacters} = useMarvelContext()
  return (
    <>

  <div className='flex justify-center w-full'>
    <button onClick={loadMoreCharacters} className=' w-auto p-2 text-white font-semibold mt-5 rounded-xl bg-blue-900'>LoadMore</button>
  </div>
    
    </>
  )
}

export default LoadMoreButton