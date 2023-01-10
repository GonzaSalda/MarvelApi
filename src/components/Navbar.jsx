import { Link } from 'react-router-dom'
import SearchCharacter from './SearchCharacter.jsx'


const Navbar = () => {

  return (
    <>

      <div className="bg-blue-900 w-full py-4 rounded-xl mb-12 flex justify-between pr-5">
        <Link to={"/"} className="px-6 text-white font-semibold text-xl ">Home</Link>
        <SearchCharacter/>
      </div>

    </>
  )
}

export default Navbar