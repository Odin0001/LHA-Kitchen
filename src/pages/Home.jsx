import React from 'react'
import Hero from '../components/Hero'
import howItWorks from '../assets/how-it-works.jpg'
import { ImSpoonKnife } from 'react-icons/im'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='w-full h-[100vh] bg-green-600 flex justify-center items-center'>
        <h1 className='font-light lg:text-8xl text-6xl text-white text-center italic'>Spread Your Taste All Around the World in Few Clicks</h1>
      </div>
      <div className='max-w-[75%] mx-auto'>
        <h1 className='text-4xl text-green-600 mx-auto py-4 mt-8'>How it Works <hr className='border-green-600' /></h1>
        <div className='w-full h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-10 mt-20'>
          <img src={howItWorks} alt="Section Image" loading='lazy' className='rounded-3xl lg:max-w-[50%] max-w-full shadow-xl' />
          <ul className='flex-1 flex flex-col gap-4'>
            <li className='flex items-center gap-2 lg:text-2xl text-xl text-gray-700 font-light'><ImSpoonKnife size={20} />Create an Account</li>
            <li className='flex items-center gap-2 lg:text-2xl text-xl text-gray-700 font-light'><ImSpoonKnife size={20} />Go to Your Profile</li>
            <li className='flex items-center gap-2 lg:text-2xl text-xl text-gray-700 font-light'><ImSpoonKnife size={20} />Create a Recipe</li>
            <li className='flex items-center gap-2 lg:text-2xl text-xl text-gray-700 font-light'><ImSpoonKnife size={20} />Explore Other Recipes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home