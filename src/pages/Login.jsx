import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth'
import login from '../assets/login.jpg'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { toast } from 'react-toastify'

const Login = () => {

  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  function handlePassword() {
    setShowPass(prevPass => !prevPass)
  }

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { email, password } = form

  function onChange(e) {
    setForm(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)

      if(userCredentials.user) {
        navigate('/')
      }
      toast.success('Logged in was Successful !')
    } catch (error) {
      toast.error('Bad user credentials')
    }
  }

  return (
    <div className='flex justify-center items-center mb-10 xl:mb-0'>
        <img loading='lazy' src={login} style={{maxWidth: '50%', maxHeight: '100vh', objectFit: 'cover'}} className='hidden xl:block w-full' />
      <div className='flex-1 md:px-28 px-16 pt-16'>
        <h1 className='text-4xl text-green-600 my-12 md:my-0 md:mb-12 text-center'>Login</h1>
        <form className='flex flex-col items-center justify-center gap-[1rem] mx-auto' onSubmit={onSubmit}>
          <input type="email" placeholder='Email' id='email' value={email} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
          <div className='relative w-full'>
            <input type={showPass ? 'text' : 'password'} placeholder='Password' id='password' value={password} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
            {!showPass ? <AiFillEye className='absolute right-3 top-7 cursor-pointer' size={20} onClick={handlePassword} /> : <AiFillEyeInvisible className='absolute right-3 top-7 cursor-pointer' size={20} onClick={handlePassword} />}
          </div>
          <button className='w-full mx-auto bg-green-600 text-white py-2 px-6 mt-6 rounded hover:bg-green-400 transition duration-500 ease'>Login</button>
          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
        </form>
        <div className='md:flex md:justify-between flex flex-col whitespace-nowrap mt-6 text-sm sm:text-lg'>
          <p className='mb-6'>Dont't have an account? <Link to='/register' className='text-green-600 hover:text-green-400 transition duration-500 ease-in-out'>Register</Link> </p>
          <p className='text-blue-600 hover:text-blue-400 transition duration-500 ease-in-out'><Link to='/forgot-password'>Forgot Password?</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login