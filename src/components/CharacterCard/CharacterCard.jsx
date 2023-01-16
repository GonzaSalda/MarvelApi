import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const CharacterCard = ({ item }) => {
  return (
    <>

      <Link className='card' to={`character/${item.id}`}>
        <div className='card-front flex flex-col items-center'>
          <img className=' object-cover w-[150px] h-[150px] rounded-[150px] mt-3' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
          <p className='text-center font-semibold text-white text-2xl'>{item.name}</p>
        </div>
        <div className='card-back flex flex-col items-center'>
          <img className=' object-cover w-[150px] h-[150px] rounded-[150px] mt-3' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
          <p className='text-center font-semibold text-white text-2xl'>{item.name}</p>
        </div>

      </Link>

    </>
  )
}

export default CharacterCard