import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useMarvelContext } from '../context/MarvelContext'

const SearchPage = () => {

  const location = useLocation()

  const { character } = useMarvelContext()

  const searchCharacters = character.filter((item) => item.name.toLowerCase().includes(location.state.toLowerCase()))



  return (
    <>

      <Navbar />
      {searchCharacters.map((item) => (
        <article key={item.id}>
          <p>{item.name}</p>
          <img className='w-[150px]' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
        </article>
      ))}




    </>
  )
}

export default SearchPage