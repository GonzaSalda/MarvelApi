import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMarvelContext } from '../context/MarvelContext'



const SearchCharacter = () => {

    const{character, setCharacter} = useMarvelContext()


    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&ts=1&apikey=a2ec1eb0260a01135217a79e162f91bc&hash=a31607d9e345cb95954fab9b7de03f67`)
        const data = await res.json()
        setCharacter(data.data.results)

        navigate('/search', { state: searchValue })

    }


    const handleChange = (e) => {
        setSearchValue(e.target.value)
        console.log(e.target)
    }
    console.log(character)



    return (
        <>


            <form onSubmit={handleSubmit}>
                <input className='bg-white rounded-md px-4' type="text" value={searchValue} placeholder='Search character' onChange={handleChange} />
            </form>


        </>
    )
}

export default SearchCharacter