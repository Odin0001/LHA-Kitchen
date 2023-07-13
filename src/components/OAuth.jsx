import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

const OAuth = () => {
  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //check if user already exist
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }

      navigate('/')
      toast.success('Authorization was successful !')
    } catch (error) {
      toast.error('Could not authorize with google')
    }
  }

  return (
    <button className='w-full mx-auto bg-green-800 text-white py-2 px-6 rounded hover:bg-green-400 transition duration-500 ease' onClick={onGoogleClick} type='button'>
      <FcGoogle size={20} className='inline mb-1 ml-2 bg-white rounded-full' /> Sign in with Google
    </button>
  )
}

export default OAuth