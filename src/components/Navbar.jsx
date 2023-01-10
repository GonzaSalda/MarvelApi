import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const initialState = {
    name:''
  }
  
  const [searchValue, setSearchValue] = useState(initialState)

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/search',{state: searchValue.name})
  }

  const handleChange = (e) =>{
    setSearchValue({...searchValue, [e.target.name]:e.target.value})
  }


  return (
    <>
    
          <div className="bg-blue-900 w-full py-4 rounded-xl mb-12 flex justify-between pr-5">
              <Link to={"/"}  className="px-6 text-white font-semibold text-xl ">Home</Link>
              <form onSubmit={handleSubmit}>
              <input className='bg-white rounded-md px-4' type="text" name='name' value={searchValue.name} placeholder='Search character' onChange={handleChange}/>
              </form>
              
          </div>
    
    </>
  )
}

export default Navbar