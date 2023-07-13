import hero from '../assets/hero-bg.jpg'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [pageState, setPageState] = useState('Login')
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

  return (
    <div className='relative flex flex-col gap-[1rem] items-center justify-evenly w-full h-[90vh] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[90vh] after:z-[-10] after:bg-[rgba(0,0,0,0.5)]'>
      <img src={hero} alt="Main Section" loading='lazy' className='absolute top-0 left-0 w-full h-[90vh] object-cover z-[-20]' />
      <h1 className='md:text-9xl text-7xl text-center text-transparent bg-gradient-to-b from-green-600 to-white bg-clip-text'>LHA Kitchen</h1>
      <h2 className='md:text-4xl text-2xl font-light text-center text-white'>Become a Part of us by Sharing Your Taste!</h2>
      <Link to={pageState === 'Login' ? '/login' : '/profile'}><button className='border border-white text-white text-xl font-light py-2 px-6 bg-gradient-to-r from-green-600 to-transparent rounded hover:bg-green-600 transition duration-500 ease'>Start Now</button></Link>
    </div>
  )
}

export default Hero