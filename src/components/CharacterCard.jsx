import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({item}) => {
  return (
    <>
    
        <Link to={`character/${item.id}`}>
            <img className='w-[150px]' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
            <p>{item.name}</p>
        </Link>

    </>
  )
}

export default CharacterCard