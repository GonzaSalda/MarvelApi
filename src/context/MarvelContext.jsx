import { createContext, useContext, useEffect, useState } from "react";

export const MarvelContext = createContext()

const MarvelProvider = ({children}) => {

    const [allCharacters, setAllCharacters] = useState([])

    const getAllCharacters = async () => {
        const res = await fetch('https://gateway.marvel.com:443/v1/public/characters?limit=14&ts=1&apikey=18fe302422790b23ff6e200c790f1574&hash=b1eae35f5147b92af24b7c585a9ac92e')
        const data = await res.json()
        setAllCharacters(data.data.results)
    }

    const getCharacterById = async (id) => {
        const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=18fe302422790b23ff6e200c790f1574&hash=b1eae35f5147b92af24b7c585a9ac92e`)
        const data = await res.json()
        return data.data.results
      }

      const getCharacterComicsById = async (id) => {
        const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=18fe302422790b23ff6e200c790f1574&hash=b1eae35f5147b92af24b7c585a9ac92e`)
        const data = await res.json()
        return data.data.results
      }

    useEffect(() => {
      getAllCharacters()

    }, [])
    
    return (
        <MarvelContext.Provider value={{allCharacters, getCharacterById, getCharacterComicsById}}>
            {children}
        </MarvelContext.Provider>
    )
}

export default MarvelProvider

export const useMarvelContext = () => useContext(MarvelContext)