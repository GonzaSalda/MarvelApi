import React, { useEffect, useState } from 'react'
import { useMarvelContext } from '../context/MarvelContext'
import { useParams } from 'react-router-dom'

const CharacterPage = () => {



  const { getCharacterById, getCharacterComicsById } = useMarvelContext()
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
    setComics(data)
  }

  useEffect(() => {
    fetchCharacterComics(id)
  }, [])



  return (
    <>


      <article className='flex gap-2 '>
        <article className='w-[50%]'>
          {
            character.map((item) => (

              <article key={item.id}>
                <div>
                  <h1 className='text-5xl'>{item.name}</h1>
                  <img className='pt-2 w-[600px]' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                </div>
              </article>
            ))
          }
        </article>



        <article className='overflow-scroll flex  w-[50%]' >
          {
            comics.map((item) => (
              <>
                <article key={item.title}>
                  <div>
                    <p>{item.title}</p>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                  </div>
                </article>
              </>
            ))
          }
        </article>

      </article>




    </>
  )
}

export default CharacterPage