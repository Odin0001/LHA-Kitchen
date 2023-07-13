import { Link } from 'react-router-dom'
import { useState } from 'react'
import forgotPassword from '../assets/forgot-password.jpg'
import OAuth from '../components/OAuth'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')

  function onChange(e) {
    setEmail(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)

      toast.success('Email was sent')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='flex justify-center items-center mb-10 xl:mb-0'>
        <img loading='lazy' src={forgotPassword} style={{maxWidth: '50%', maxHeight: '100vh', objectFit: 'cover'}} className='hidden xl:block w-full' />
      <div className='flex-1 md:px-28 px-16 pt-16'>
        <h1 className='md:text-4xl text-2xl text-green-600 my-12 md:my-0 md:mb-12 text-center'>Forgot Password</h1>
        <form className='flex flex-col items-center justify-center gap-[1rem] mx-auto' onSubmit={onSubmit}>
          <input type="email" placeholder='Email' id='email' value={email} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 text-2xl placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
          <div className='w-full md:flex md:justify-between flex flex-col whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Dont't have an account? <Link to='/register' className='text-green-600 hover:text-green-400 transition duration-500 ease-in-out'>Register</Link> </p>
              <p className='text-blue-600 hover:text-blue-400 transition duration-500 ease-in-out'><Link to='/login'>Sign in instead</Link></p>
            </div>
            <button type='submit' className='w-full bg-green-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-green-400 transition duration-500 ease-in-out hover:shadow-lg active:bg-blue-800'>Send reset password</button>
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword