import bg from '../assets/footer.jpg'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import myImg from '../assets/new logo 4.png'

const Footer = () => {

  let year = new Date().getFullYear()

  return (
    <div className='w-full lg:h-[100vh] h-[120vh] relative after:content-[""] after:w-full lg:after:h-[100vh] after:h-[120vh] after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:z-10'>
      <img src={bg} alt="Footer Background" loading='lazy' className='w-full lg:h-[100vh] h-[120vh] object-cover' />
      <div className='absolute top-0 left-0 w-full h-[90vh] z-20'>
        <div className='grid lg:grid-cols-3 grid-cols-1 max-w-7xl lg:mt-60 mt-10 h-80 mx-auto'>
          <div className='flex flex-col justify-between lg:mb-24 mb-8 border-r border-white px-4'>
            <h1 className='text-white text-center lg:text-left text-3xl text-gray-300 mb-6'>Discover</h1>
            <ul className='flex flex-col gap-4'>
              <Link to='/about' className=''><li className='text-3xl font-light text-white lg:text-left text-center p-2 w-full hover:bg-black rounded-md transition duration-500 ease'>About</li></Link>
              <Link to='/recipes' className=''><li className='text-3xl font-light text-white lg:text-left text-center p-2 w-full hover:bg-black rounded-md transition duration-500 ease'>Recipes</li></Link>
              <Link to='/contact' className=''><li className='text-3xl font-light text-white lg:text-left text-center p-2 w-full hover:bg-black rounded-md transition duration-500 ease'>Contact</li></Link>
            </ul>
          </div>

          <div className='flex flex-col justify-between lg:mb-24 mb-8 border-r border-white px-4'>
            <h1 className='text-white text-center text-3xl text-gray-300 mb-6'>Reach Us</h1>
            <ul className='flex flex-col justify-center items-center gap-4'>
              <a href='https://www.facebook.com/LHA-healthylifestyle-102756595546850' target='_blank' ><li className='text-3xl font-light text-white p-2 w-full hover:bg-black rounded-full border border-white transition duration-500 ease'><FaFacebookF size={25} /></li></a>
              <a href='https://www.instagram.com/lha.nutritionists/' target='_blank'><li className='text-3xl font-light text-white p-2 w-full hover:bg-black rounded-full border border-white transition duration-500 ease'><FaInstagram size={25} /></li></a>
              <a href='https://wa.me/963992822436' target='_blank' data-action="share/whatsapp/share"><li className='text-3xl font-light text-white p-2 w-full hover:bg-black rounded-full border border-white transition duration-500 ease'><FaWhatsapp size={25} /></li></a>
            </ul>
          </div>

          <div className='flex flex-col lg:mb-24 mb-8 px-4'>
            <h1 className='text-white text-center lg:text-left text-3xl text-gray-300 mb-6'>Become a Client! Visit:</h1>
            <ul className='flex flex-col gap-4'>
              <a href='/' className=''><li className='text-3xl font-light text-white lg:text-left text-center p-2 w-full hover:bg-black rounded-md transition duration-500 ease'>LHA Nutritionists</li></a>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col w-full justify-evenly items-center text-center md:gap-0 gap-2 absolute bottom-0 left-0 z-20'>
          <p className='text-white'>&copy;2022 - {year} L.H.A Nutritionists. All Rights Reserved.</p>
          <p className='w-10 text-white justify-center flex items-center gap-2 w-72'>Developed by Philip Jobran<a href="https://www.linkedin.com/in/philip-jobran-75bb3a21b/" target='_blank'><img src={myImg} className='w-8' /></a></p>
        </div>
    </div>
  )
}

export default Footer