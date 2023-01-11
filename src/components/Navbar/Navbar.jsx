import { Link } from 'react-router-dom'
import SearchCharacter from '../SearchCharacter/SearchCharacter.jsx'
import './index.css'


const Navbar = () => {

  return (
    <>

      <div className="nav  w-full py-4 rounded-xl mb-12 flex justify-between pr-5">
        <Link to={"/"} className="px-6 text-white font-semibold text-xl mt-1">Home</Link>
        <SearchCharacter/>
      </div>

    </>
  )
}

export default Navbar