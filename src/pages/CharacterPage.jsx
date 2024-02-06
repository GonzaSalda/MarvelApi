import React, { useEffect, useState } from 'react'
import { useMarvelContext } from '../context/MarvelContext'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'


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
    console.log(character)
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

            <article className='flex flex-col items-center' key={item.id}>
              
                <h1 className='text-5xl'>{item.name}</h1>
                <img className='pt-2 w-[350px] h-[350px] rounded-[250px] object-cover' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
             
            </article>
          ))
        }
      </article>



      <article className='flex flex-wrap w-auto gap-3 text-sm justify-center px-5' >
        {
          comics.map((item) => (
            <>
              <div className='grid grid-cols-[250px] grid-rows-[80px_1fr] mb-20 items-center justify-items-center' key={item.title}>
                <p className='font-semibold text-sm'>{item.title}</p>
                <img className='w-[150px] object-cover' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
              </div>
            </>
          ))
        }
      </article>



            <div div className='flex justify-center w-full'>
            <button className='btn bg-[#F6F9FE] text-gray-500 drop-shadow-md w-auto h-9 my-8 px-2 rounded-full font-semibold hover:translate-y-[-1px]' onClick={loadMoreComics}><span>Load More</span></button>
            </div>



    </>
  )
}

export default CharacterPage