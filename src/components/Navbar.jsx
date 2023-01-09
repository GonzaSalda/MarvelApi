import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
          <div className="bg-blue-900 w-full py-4 rounded-xl mb-12">
              <Link to={"/"}  className="px-6 text-white font-semibold text-xl ">Home</Link>
          </div>
    
    </>
  )
}

export default Navbar