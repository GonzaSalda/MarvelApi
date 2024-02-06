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

          <div className='h-screen flex gap-10 justify-around flex-wrap px-2 items-center '>

            {searchCharacters.map((item) => (
              <Link key={item.id} className='card' to={`/character/${item.id}`}>
                <div className='card-front flex flex-col items-center'>
                  <img className=' object-cover w-[150px] h-[150px] rounded-[150px] my-3' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
                  <p className='text-center font-semibold text-red-400 text-2xl'>{item.name}</p>
                </div>
                <div className='card-back flex flex-col items-center'>
                  <img className=' object-cover w-[150px] h-[150px] rounded-[150px] my-3' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Character" />
                  <p className='text-center font-semibold text-red-400 text-2xl'>{item.name}</p>
                </div>

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