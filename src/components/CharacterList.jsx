import React from 'react'
import { useMarvelContext } from '../context/MarvelContext'
import CharacterCard from './CharacterCard/CharacterCard'

const CharacterList = () => {

  const{allCharactersList} = useMarvelContext()


  return (
    <>
    
      <div className='flex gap-5 mb-6 justify-center items-center flex-wrap'>
        {allCharactersList.map((item) =>(
          <CharacterCard key={item.id} item={item}/>
        ))}
      </div>

    </>
  )
}

export default CharacterList