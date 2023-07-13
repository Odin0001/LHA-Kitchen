import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import register from '../assets/register.jpg'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const Register = () => {

  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  function handlePassword() {
    setShowPass(prevPass => !prevPass)
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = form

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
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      updateProfile(auth.currentUser, {displayName: name})
      const user = userCredentials.user
      const formCopy = {...form}
      delete formCopy.password
      formCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), formCopy)

      navigate('/')
      toast.success('Sign up was successful !')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='flex justify-center items-center'>
        <img loading='lazy' src={register} style={{maxWidth: '50%', maxHeight: '100vh', objectFit: 'cover'}} className='hidden xl:block w-full' />
      <div className='flex-1 md:px-28 px-16 pt-16'>
        <h1 className='text-4xl text-green-600 my-12 md:my-0 md:mb-12 text-center'>Register</h1>
        <form className='flex flex-col items-center justify-center gap-[1rem] mx-auto' onSubmit={onSubmit}>
          <input type="text" placeholder='Username' id='name' value={name} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 text-2xl placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
          <input type="email" placeholder='Email' id='email' value={email} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 text-2xl placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
          <div className='relative w-full'>
            <input type={showPass ? 'text' : 'password'} placeholder='Password' id='password' value={password} onChange={onChange} className='p-6 border-2 border-transparent border-b-green-600 text-2xl placeholder:text-2xl focus:border-2 focus:border-green-600 focus:rounded outline-none w-full' />
            {!showPass ? <AiFillEye className='absolute right-3 top-7 cursor-pointer' size={20} onClick={handlePassword} /> : <AiFillEyeInvisible className='absolute right-3 top-7 cursor-pointer' size={20} onClick={handlePassword} />}
          </div>
          <button className='w-full mx-auto bg-green-600 text-white py-2 px-6 mt-6 rounded hover:bg-green-400 transition duration-500 ease'>Sign Up</button>
          <div className='flex items-center mt-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
        </form>
        <div className='flex justify-center whitespace-nowrap mt-6 text-sm sm:text-lg'>
          <p className='mb-6'>Have an Account? <Link to='/login' className='text-green-600 hover:text-green-400 transition duration-500 ease-in-out'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register