import { useState ,useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import bg from '../assets/recipes-bg.jpg'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState([])
  
  useEffect(() => {
    async function fetchRecipes() {
      const allData = []
      
      const querySnapshot = await getDocs(collection(db, 'recipes'))
      querySnapshot.forEach(doc => {
        allData.push({data: doc.data(), id: doc.id})
      })
      
      setAllRecipes(allData)
    }
    fetchRecipes()
  }, [])


  return (
    <>
      <div className='w-full h-[350px]'>
        <img src={bg} alt="Recipes Cover" loading='lazy' className='w-full max-h-[350px] object-cover' />
        <h1 className='text-center text-4xl my-6 text-green-600'>Check Today's Menu</h1>
      </div>
      <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-24 gap-4 max-w-6xl p-3 mx-auto bg-green-600 rounded-2xl transition duration-500 ease'>
      {allRecipes.map(recipe => (
        <li key={recipe.id} className='flex flex-col justify-between items-center h-[350px] my-4 shadow-md hover:shadow-xl hover:scale-105 bg-white overflow-hidden rounded-md transition duration-500 ease'>
          <Link to={`/recipes/${recipe.id}`} className='w-full'>
            <img src={recipe.data.imgUrls} alt="Recipe" loading='lazy' className='w-full h-[280px] object-cover' />
            <h1  className='text-center py-4 text-lg'>{recipe.data.items[0].title}</h1>
          </Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Recipes

// where('title', '!=', ''),

// async function fetchRecipes() {
//   try {
//     //GET REFERENCE
//     const recipesRef = collection(db, 'recipes')
//     //CREATE THE CONDITION (QUERY) OF THE CONDITION
//     const q = query(recipesRef, where('title', '!=', true), orderBy('timestamp', 'desc'))
//     //EXCECUTE THE QUERY
//     const querySnap = await getDocs(q)
//     const myRecipes = []
//     querySnap.forEach(doc => {
//       return myRecipes.push({
//         id: doc.id,
//         data: doc.data()
//       })
//     })
//     setRecipes(myRecipes)
//     console.log(myRecipes)
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchRecipes()


//allRecipes[0][0].items[0].name


// REFER TO THIS IN CASE LOST TO GET ALL THE DATA
// useEffect(() => {
//   async function fetchRecipes() {
//     const allData = []
    
//     const querySnapshot = await getDocs(collection(db, 'recipes'))
//     querySnapshot.forEach(doc => {
//       allData.push({data: doc.data(), id: doc.id})
//     })
    
//     setAllRecipes(allData)
//   }
//   fetchRecipes()
// }, [])


// {recipe.data.items.map(item => (
//   <h1 key={(Math.random() * 10000).toFixed(0)} className='text-center py-4 text-lg'>
//     {item.title}
//   </h1>
// ))}