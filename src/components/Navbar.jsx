import { FaHamburger } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../assets/pngLogo.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const links = [
  {name: 'ABOUT', link: '/about'},
  {name: 'RECIPES', link: '/recipes'},
  {name: 'CONTACT', link: '/footer'},
]

const Navbar = () => {
  const navigate = useNavigate()
  const [pageState, setPageState] = useState('Login') //dynamic login or profile navbar
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setPageState('Profile')
      } else {
        setPageState('Login')
      }
    })
  }, [auth])

  //MOBILE MENU
  const [isOpen, setIsOpen] = useState(false)
  function handleMenu() {
    setIsOpen(prev => !prev)
  }

  return (
    <nav className='w-full lg:px-24 px-12 shadow-md flex justify-between items-stretch p-4'>
        <img
            src={Logo}
            alt="Logo"
            className="h-14 cursor-pointer"
            onClick={() => navigate("/")}
          />
        <ul className={`lg:flex lg:flex-row lg:items-center lg:static lg:w-auto lg:h-auto lg:bg-white lg:backdrop-blur-none lg:translate-x-0 fixed top-[11vh] right-[-500px] z-30 w-full h-full bg-[rgba(50,168,82,0.4)] backdrop-blur flex flex-col items-center justify-center gap-[1.5rem] transition duration-500 ease ${isOpen ? 'left-0' : ''}`}>
          {links.map(link => (
            <Link to={link.link} key={link.name} className='text-xl tracking-widest lg:w-auto w-full hover:bg-white py-4 lg:py-0 text-center transition duration-500 ease'><li className='lg:text-gray-800 text-white font-medium lg:hover:text-green-400 transition duration-500 ease'>{link.name}</li></Link>
          ))}
        <Link to={pageState === 'Login' ? '/login' : '/profile'}><button type='button' className='bg-green-600 text-white py-2 px-6 rounded hover:bg-green-400 transition duration-500 ease'>{pageState}</button></Link>
        </ul>
        <div className='cursor-pointer lg:hidden mt-2' onClick={handleMenu}>
          {!isOpen ? <FaHamburger size={20} /> : <GiKnifeFork size={20} />}
        </div>
    </nav>
  )
}

export default Navbar