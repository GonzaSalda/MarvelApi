import React from 'react'
import { Link } from 'react-router-dom'
import { useMarvelContext } from '../../context/MarvelContext'
import './index.css'
const Banner = () => {

  return (
    <>

      <div class="container mb-2 md:mb-12 flex ">

        <div className='flex-1 max-h-[300px] my-auto md:mx-16'>
          <h1 className='text-4xl font-semibold text-red-400 mb-10 mx-4'>Explore all the Marvel's characters </h1>
          <p className='max-w-[450px] text-base font-semibold mx-6 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit exercitationem fugit omnis est dolore sint ex, voluptatibus a eos quos! Delectus, repellendus.</p>
        </div>

        <div className='flex-1 hidden lg:block'>
          <div className="container-img"></div>
          <Link to={`/character/1009407`}>
            <img className='loki' src="https://css-layout-seven.vercel.app/assets/img/avengers.png" alt="" />
          </Link>
        </div>

      </div>

    </>
  )
}

export default Banner