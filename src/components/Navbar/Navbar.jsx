import { Link } from 'react-router-dom'
import SearchCharacter from '../SearchCharacter/SearchCharacter.jsx'
import Home from '../../assets/images/marvelicon'

const Navbar = () => {

  return (
    <>

 <div className="nav  w-full py-4 rounded-xl md:mb-6 flex justify-between pr-5">
        <Link to={"/"} className="px-4"><img className='max-w-full' src={Home}/></Link>
        <SearchCharacter/>
      </div>
  
     

    </>
  )
}

export default Navbar