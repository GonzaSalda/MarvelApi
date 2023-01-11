import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useMarvelContext } from '../context/MarvelContext'

const SearchPage = () => {

  const location = useLocation()

  const { character } = useMarvelContext()

  const searchCharacters = character.filter((item) => item.name.toLowerCase().includes(location.state.toLowerCase()))



  return (
    <>

      <Navbar />



      {
        character.length !== 0 ?

          <div className='flex gap-10'>
            
            { searchCharacters.map((item) => (
            <Link to={`/character/${item.id}`} key={item.id}>
              <p>{item.name}</p>
              <img className='w-[150px]' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
            </Link>
            ))}
          </div>
          :
          <div className='flex justify-center items-center h-96'>
             <p className='text-5xl font-semibold '>No existe ese personaje</p>
          </div>
         


      }

    </>
  )
}

export default SearchPage