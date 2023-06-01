import {React,useState} from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
const Navbar = () => {
  const [nav, setnav] = useState(true);

  if(!nav){
    document.body.style.overflow='hidden'
  }else{
    document.body.style.overflow='scroll'
  }

  return (
    <div className='   absolute w-full flex justify-between items-center p-4 z-50'>
      <h1 className=' text-white font-bold z-20 text-2xl'>Experence</h1>
      <HiMenuAlt3 onClick={ () => {
        setnav(!nav)
      }
      } size={30} className='  z-20 cursor-pointer text-white '/>
      <div className={!nav? ' ease-in duration-300 fixed top-0 left-0 w-full h-screen flex flex-col bg-black/90 text-gray-300 px-4 py-7 z-10  ':'absolute top-0 left-[-100%]'} >
        <ul className=' fixed flex flex-col w-full h-full justify-center items-center'>
          <li>Home</li>
          <li>Destination</li>
          <li>Reservation</li>
          <li>Amenities</li>
          <li>Rooms</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
