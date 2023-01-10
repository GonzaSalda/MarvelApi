import { createContext, useContext, useEffect, useState } from "react";

export const MarvelContext = createContext()

const MarvelProvider = ({ children }) => {

  const [allCharactersList, setAllCharactersList] = useState([])
  const [offSet, setOffSet] = useState(0)
  const [offSetComics, setOffSetComics] = useState(0)
  const [character, setCharacter] = useState([])

  const getAllCharactersList = async () => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=14&offset=${offSet}&ts=1&apikey=a2ec1eb0260a01135217a79e162f91bc&hash=a31607d9e345cb95954fab9b7de03f67`)
    const data = await res.json()
    setAllCharactersList([...allCharactersList, ...data.data.results])
  }

/*   const getCharacterByName = async (name) => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=a2ec1eb0260a01135217a79e162f91bc&hash=a31607d9e345cb95954fab9b7de03f67`)
    const data = await res.json()
    return data.data.results
  } */



  const loadMoreCharacters = () => {
    setOffSet(offSet + 15)
  }



  const getCharacterById = async (id) => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=a2ec1eb0260a01135217a79e162f91bc&hash=a31607d9e345cb95954fab9b7de03f67`)
    const data = await res.json()
    return data.data.results
  }

  const getCharacterComicsById = async (id) => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=5&offset=${offSetComics}&ts=1&apikey=a2ec1eb0260a01135217a79e162f91bc&hash=a31607d9e345cb95954fab9b7de03f67`)
    const data = await res.json()
    return data.data.results
  }

  const loadMoreComics = () => {
    setOffSetComics(offSetComics + 6)
  }

  useEffect(() => {
    getAllCharactersList()

  }, [offSet])

  return (
    <MarvelContext.Provider value={{character, setCharacter, allCharactersList, getCharacterById, getCharacterComicsById, loadMoreCharacters, loadMoreComics, offSetComics }}>
      {children}
    </MarvelContext.Provider>
  )
}

export default MarvelProvider

export const useMarvelContext = () => useContext(MarvelContext)