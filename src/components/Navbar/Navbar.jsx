import { Link } from 'react-router-dom'
import SearchCharacter from '../SearchCharacter/SearchCharacter.jsx'
import Home from '../../assets/images/deadpool.jpg'

const Navbar = () => {

  return (
    <>

 <div className="nav  w-full py-4 rounded-xl md:mb-6 flex justify-between pr-5">
        <Link to={"/"} className="px-4"><img className='max-w-full rounded-full w-[60px] h-[60px]' src={Home}/></Link>
        <SearchCharacter/>
      </div>
  
     

    </>
  )
}

export default Navbar