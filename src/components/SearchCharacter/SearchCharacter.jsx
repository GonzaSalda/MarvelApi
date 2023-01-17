import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMarvelContext } from '../../context/MarvelContext'

const SearchCharacter = () => {

    const { setCharacter } = useMarvelContext()


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
    }


    return (
        <>


            <form onSubmit={handleSubmit}>
                <input placeholder="Search character" className="h-[36px] rounded-xl text-start px-2 focus:outline-none bg-slate-100 
                drop-shadow-md text-gray-500"  value={searchValue} onChange={handleChange} type="text"></input>
            </form>
        </>
    )
}

export default SearchCharacter