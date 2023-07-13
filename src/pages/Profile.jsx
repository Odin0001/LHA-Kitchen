import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth"
import { collection, deleteDoc, doc, getDocs, orderBy, Query, query, updateDoc, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../firebase"
import { PiCookingPotDuotone } from 'react-icons/pi'
import RecipeItem from '../components/RecipeItem'


const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)
  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(true)

  function handleChange() {
    setChangeDetails(prevChange => !prevChange)
  }

  function onChange(e) {
    setFormData(prevData => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const { name, email } = formData

  function onLogOut() {
    auth.signOut()
    navigate('/')
  }

  async function onSubmit() {
    try {
      if(auth.currentUser.displayName !== name) {
        //update displayname in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        //update name in firestore
        const docRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(docRef, {
          name //name is the same if we right name: name
        })
      }
      toast.success('Profile Details Updated')
    } catch (error) {
      toast.error('Could not Apply Changes')
    }
  }

  //FETCH RECIPES TO DISPLAY FROM DATABASE
  useEffect(() => {
    async function fetchUserRecipes() {
      const recipeRef = collection(db, 'recipes')
      const q = query(recipeRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'))
      const querySnap = await getDocs(q)
      let recipes = []
      querySnap.forEach(doc => {
        return recipes.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setRecipes(recipes)
      setLoading(false)
    }
    fetchUserRecipes()
  }, [auth.currentUser.uid])

  //DELETE A RECIPE FROM PROFILE
  async function onDelete(recipeID) {
    if(window.confirm('Are you sure you want to delete this recipe?')) {
      await deleteDoc(doc(db, 'recipes', recipeID))
      const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeID)
      setRecipes(updatedRecipes)
      toast.success('Recipe deleted successfully')
    }
  }

  //EDIT A RECIPE FROM PROFILE
  function onEdit(recipeID) {
    navigate(`/edit-recipe/${recipeID}`)
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-5xl text-green-600 text-center mt-6 font-light tracking-wider">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input type="text" id="name" value={name} disabled={!changeDetails} onChange={onChange} className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-500 ease-in-out ${changeDetails && 'bg-green-200 focus:bg-green-200'}`} />

            <input type="email" id="email" value={email} disabled={!changeDetails}  className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-500 ease-in-out`} />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">Do you want to change your name? <span className="text-green-600 hover:text-green-700 transition duration-500 ease-in-out ml-1 cursor-pointer" onClick={() => {
                changeDetails && onSubmit()
                handleChange()
              }}> {changeDetails ? 'Apply Changes' : 'Edit'}</span></p>
              <p className="text-blue-600 hover:text-blue-800 transition duration-500 ease-in-out cursor-pointer" onClick={onLogOut}>Sign out</p>
            </div>
          </form>
         
            <Link to='/create-recipe' className="w-full flex justify-center items-center bg-green-600 text-white uppercase px-7 py-3 text-md font-medium rounded shadow-lg hover:bg-green-700 transition duration-500 ease-in-out hover:shadow-2xl hover:shadow-green-500 active:bg-green-800">
              <PiCookingPotDuotone size={25} className='mr-2 text-black' />  
              <button type="submit" className="">Create Your Recipe</button>
            </Link>

        </div>
      </section>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && recipes.length > 0 && (
          <>
            <h2 className="text-4xl text-center text-gray-600 my-6 font-light">My Recipes</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6 gap-4">
              {recipes.map(recipe => (
                <RecipeItem key={recipe.id} id={recipe.id} recipe={[recipe.data]} onDelete={() => onDelete(recipe.id)} onEdit={() => onEdit(recipe.id)} />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default Profile