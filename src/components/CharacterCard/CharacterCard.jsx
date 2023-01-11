import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const CharacterCard = ({item}) => {
  return (
    <>
    
        <Link className='card flex flex-col' to={`character/${item.id}`}>
            <img className='object-cover w-[150px] h-[150px] rounded-[150px] self-center mt-3' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
            <p className='text-center font-semibold text-white text-2xl'>{item.name}</p>
        </Link>

    </>
  )
}

export default CharacterCard