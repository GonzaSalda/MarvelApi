import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CharacterList from '../components/CharacterList'
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton'

const PageHome = () => {
  return (
    <>
    

      <Navbar/>
      
      <CharacterList/>

      <LoadMoreButton/>
      
    </>
  )
}

export default PageHome