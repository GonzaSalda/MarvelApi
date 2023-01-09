import React from 'react'
import { useMarvelContext } from '../context/MarvelContext'
import CharacterCard from './CharacterCard'

const CharacterList = () => {

  const{allCharacters} = useMarvelContext()

  return (
    <>
    
      <div className='flex gap-5 mb-6 justify-center items-center flex-wrap'>
        {allCharacters.map((item) =>(
          <CharacterCard key={item.id} item={item}/>
        ))}
      </div>

    </>
  )
}

export default CharacterList