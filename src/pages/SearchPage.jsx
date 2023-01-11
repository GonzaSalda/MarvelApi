import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useMarvelContext } from '../context/MarvelContext'
import '../components/CharacterCard/index.css'

const SearchPage = () => {

  const location = useLocation()

  const { character } = useMarvelContext()

  const searchCharacters = character.filter((item) => item.name.toLowerCase().includes(location.state.toLowerCase()))



  return (
    <>

      <Navbar />



      {
        character.length !== 0 ?

          <div className='flex gap-10 justify-around flex-wrap px-2'>
            
            { searchCharacters.map((item) => (
            <Link className='card flex flex-col' to={`/character/${item.id}`} key={item.id}>
              <p className='self-center my-4 text-white font-semibold'>{item.name}</p>
              <img className='w-[150px] self-center rounded-[150px] object-cover' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
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