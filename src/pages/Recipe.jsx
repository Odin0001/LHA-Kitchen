import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import Spinner from '../components/Spinner'
import { FaShare } from 'react-icons/fa'

const Recipe = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copyLink, setCopyLink] = useState(false)


  useEffect(() => {
    async function fetchRecipe() {
      const docRef = doc(db, 'recipes', params.recipeId)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        setRecipe(docSnap.data())
        setLoading(false)
      } 
    }
    fetchRecipe()
  }, [params.recipeId])

  if(loading) {
    return <Spinner />
  }
  
  return (
    <>
      <div className='w-full h-[350px] relative'>
        <img src={recipe.imgUrls[0]} alt="Recipe Cover" loading='lazy' className='w-full max-h-[350px] object-cover' />
        <FaShare size={40} onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setCopyLink(true)
          setTimeout(() => {
            setCopyLink(false) 
          },2000)
          }} className='absolute top-[50%] right-12 cursor-pointer text-white bg-green-600 hover:border border border-transparent hover:border-white hover:bg-transparent rounded-full p-1 z-10 transition duration-500 ease' />
          {copyLink && <p className='absolute top-[65%] right-5 font-semibold p-1 border-2 border-gray-400 rounded-md bg-white z-10'>Link Copied !</p>}
      </div>
      <h1 className='text-green-500 text-4xl text-center my-6'>{recipe.items[0].title}</h1>
      <div className='flex flex-col md:flex-row max-w-6xl lg:mx-auto m-4 p-4 mb-10 rounded-lg bg-green-100 shadow-xl lg:space-x-5'>
        <div className='w-full min-h-[200px] lg:min-h-[400px]'>
          <h2 className='text-2xl mt-8'>How to Prepare:</h2>
          <p className='text-xl mt-2 bg-white my-2 p-2 rounded shadow-lg text-gray-600'>{recipe.desc}</p>
        </div>
        <div className='w-full min-h-[200px] lg:min-h-[400px]'>
          <h2 className='text-2xl mt-8'>Ingredients:</h2>
          <ul className='p-4'>
            <div className='w-full flex justify-between py-2 mb-4 pr-4 border-b border-gray-500'>
              <span className='text-lg'>Item:</span>
              <span className='text-lg'>Quantity:</span>
            </div>
            <li>{recipe.items.map(item => (
              <div key={(Math.random() * 10000).toFixed()} className='w-full flex justify-between bg-white my-2 p-2 rounded shadow-lg'>
                <p className='text-lg text-gray-600'>- {item.name}</p>
                <p className='text-lg text-gray-600 mr-10'>{item.quantity}</p>
              </div>
            ))}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Recipe

// {recipe.items[0].name}
