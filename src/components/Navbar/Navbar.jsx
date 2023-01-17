import { Link } from 'react-router-dom'
import SearchCharacter from '../SearchCharacter/SearchCharacter.jsx'


const Navbar = () => {

  return (
    <>

      <div className="nav  w-full py-4 rounded-xl md:mb-6 flex justify-between pr-5">
        <Link to={"/"} className="px-6 text-red-400 font-bold text-2xl mt-1">Home</Link>
        <SearchCharacter/>
      </div>

    </>
  )
}

export default Navbar