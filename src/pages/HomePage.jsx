import React from 'react'
import CharacterList from '../components/CharacterList/CharacterList'
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton'
import Banner from '../components/Banner/Banner'
const PageHome = () => {
  return (
    <>



      <div className='  bg-stone-200'>
        <Banner />
        <CharacterList />
      </div>

      

     

    </>
  )
}

export default PageHome