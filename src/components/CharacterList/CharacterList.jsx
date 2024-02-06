import React from 'react'
import { useMarvelContext } from '../../context/MarvelContext'
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterList = () => {

  const{allCharactersList} = useMarvelContext()


  return (
    <>
    
      <div className=' flex gap-5  md:mt-32 mb-14 justify-center items-center flex-wrap'>
        {allCharactersList.map((item) =>(
          <CharacterCard key={item.id} item={item}/>
        ))}
      </div>

    </>
  )
}

export default CharacterList