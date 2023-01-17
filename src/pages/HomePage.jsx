import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CharacterList from '../components/CharacterList/CharacterList'
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton'
import Banner from '../components/Banner/Banner'

const PageHome = () => {
  return (
    <>


      <Navbar />

      <div className='min-h-[1420px]'>
        
        <Banner />
        <CharacterList />
        <LoadMoreButton />
      </div>

      

     

    </>
  )
}

export default PageHome