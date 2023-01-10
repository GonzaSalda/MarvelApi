import React  from 'react'
import { useLocation } from 'react-router-dom'
import { useMarvelContext } from '../context/MarvelContext'

const SearchPage = () => {

    const location = useLocation()

    const {allCharacters} = useMarvelContext()

    const searchCharacters = allCharacters.filter((item) => item.name.toLowerCase().includes(location.state.toLowerCase()))
    console.log(searchCharacters)


  return (
    <>

        {searchCharacters.map((item) => (
            <article>
                <p>{item.name}</p>
            </article>
        ))}

        <p>Hola</p>
    
    
    </>
  )
}

export default SearchPage