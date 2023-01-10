import React, { useEffect, useState } from 'react'
import { useMarvelContext } from '../context/MarvelContext'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CharacterPage = () => {



  const { getCharacterById, getCharacterComicsById, offSetComics, loadMoreComics } = useMarvelContext()
  const [character, setCharacter] = useState([])
  const [comics, setComics] = useState([])
  const { id } = useParams()


  const fetchCharacter = async (id) => {
    const data = await getCharacterById(id)
    setCharacter(data)
  }

  useEffect(() => {
    fetchCharacter(id)
  }, [])

  const fetchCharacterComics = async (id) => {
    const data = await getCharacterComicsById(id)
    setComics([...comics, ...data])
  }

  useEffect(() => {
    fetchCharacterComics(id)
  }, [offSetComics])


  return (
    <>

      <Navbar />


      <article className='flex justify-center mb-5'>
        {
          character.map((item) => (

            <article key={item.id}>
              <div className='flex flex-col items-center'>
                <h1 className='text-5xl'>{item.name}</h1>
                <img className='pt-2 w-[350px] h-[350px] rounded-xl ' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
              </div>
            </article>
          ))
        }
      </article>



      <article className='flex flex-wrap w-auto gap-3 text-sm justify-center px-5' >
        {
          comics.map((item) => (
            <>
              <div className='grid grid-cols-[250px] grid-rows-[80px_1fr] mb-20 items-center' key={item.title}>
                <p className='font-semibold text-lg '>{item.title}</p>
                <img className='w-[150px] object-cover' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
              </div>
            </>
          ))
        }
      </article>



            <div div className='flex justify-center w-full'>
              <button onClick={loadMoreComics} className='w-auto p-2 text-white font-semibold my-5 rounded-xl bg-blue-900'>LoadMore</button>
            </div>



    </>
  )
}

export default CharacterPage