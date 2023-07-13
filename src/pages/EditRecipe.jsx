import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { v4 as uuidv4, v4 } from 'uuid'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'


const EditRecipe = () => {

  const auth = getAuth()
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [desc, setDesc] = useState('')
  const [images, setImages] = useState({})
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState(null)

  const params = useParams()
  useEffect(() => {
    setLoading(true)
    async function fetchRecipe() {
      const docRef = doc(db, 'recipes', params.recipeId)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        setRecipe(docSnap.data())
        setItems([docSnap.data()])
        setLoading(false)
      } else {
        navigate('/')
        toast.error('Recipe does not exist')
      }
    }
    fetchRecipe()
  }, [navigate, params.recipeId])

  //MAKE SURE THE EDITOR IS THE OWNER OF THE RECIPE
  useEffect(() => {
    if(recipe && recipe.userRef !== auth.currentUser.uid) {
      toast.error('You can not edit this recipe')
      navigate('/')
    }
  }, [auth.currentUser.uid, recipe, navigate])

  //adding new item to recipe
  const [newItem, setNewItem] = useState({title: '' ,name: '', quantity: ''}) 

  function addItem(e) {
    e.preventDefault()

    if(newItem.title !== '' && newItem.name !== '' && newItem.quantity !== '') {
      setItems([...items, newItem])
      setNewItem({name: '', quantity: ''})
    }
  }

  // DELETE ITEM FROM RECIPE
  const deleteItem = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }

  async function submitForm() {
    console.log([...items, desc, images])
    setLoading(true)
    if(images.length > 1) {
      setLoading(false)
      toast.error('Maximum images allowed are 1')
      return
    }

    //STORING IMAGES IN FIRESTORE
    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, image)
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
            reject(error)
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL)
            });
          }
        );
      })
    }

    const imgUrls = await Promise.all([...images].map(image => storeImage(image)))
      .catch(error => {
      setLoading(false)
      toast.error('Images not uploaded')
      return
    })

    //UPLOADING DATA TO FIREBASE
    const formDataCopy = {
      items,
      desc,
      imgUrls,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid
    }
    
    //UPDATING RECIPE
    const docRef = doc(db, 'recipes', params.recipeId)
    await updateDoc(docRef, formDataCopy)
    setLoading(false)
    toast.success('Recipe was updated')
    navigate(`/recipes/${docRef.id}`)
  }
  if(loading) {
    return <Spinner />
  }

  return (
    <main className='max-w-xl mx-auto my-8 px-2'>
      <h1 className='text-4xl text-center mt-6 font-bold text-green-600 mt-6'>Edit Recipe</h1>
      <div className='rounded-lg bg-green-500 p-4 mt-6'>
        <form className="grid grid-cols-6 items-center text-gray-700">
          <input className='col-span-6 mb-4 p-3 border border-gray-300 focus:border-2 focus:border-green-600 outline-none rounded' type="text" placeholder='Recipe Title' required value={newItem.title} onChange={(e) => setNewItem({...newItem, title: e.target.value})} />
          <input className='col-span-3 p-3 border border-gray-300 focus:border-2 focus:border-green-600 outline-none rounded placeholder:lg:text-lg placeholder:text-sm' type="text" placeholder='Item with Unit' required value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
          <input className='col-span-2 p-3 border border-gray-300 focus:border-2 focus:border-green-600 outline-none rounded mx-3 placeholder:lg:text-lg placeholder:text-sm' type="number" placeholder='Quantity' required min='0' value={newItem.quantity} onChange={(e) => setNewItem({...newItem, quantity: e.target.value})} />
          <button className='text-white text-xl bg-green-700 hover:bg-green-600 p-3 text-xl rounded transition duration-500 ease' type="button" onClick={addItem}>+</button>
          <div className='my-3 col-span-6'>
            <p className='mb-2 text-xl font-semibold'>Image</p>
            <input type="file" id='images' accept='.jpg, .png, .jpeg' required onChange={(e) => setImages(e.target.files)} className='w-full bg-white px-3 py-1.5 border border-gray-300 rounded' />
          </div>
        </form>
        <ul>
          {items.map((item, id) => (
            <li className='my-4 w-full flex justify-between bg-green-300 rounded' key={id}>
              <div className='p-4 w-full flex justify-between'>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              </div>
              <button onClick={() => deleteItem(id)} className='ml-8 p-4 border-l-2 border-green-700 hover:bg-green-400 w-16 transition duration-500 ease'>X</button>
            </li>
          ))}
          <textarea cols="30" rows="10" placeholder='How to Prepare' required value={desc} onChange={(e) => setDesc(e.target.value)} className='w-full mt-6 rounded border border-gray-300 focus:border-2 focus:border-green-600 outline-none resize-none p-4'></textarea>
          <button type='button' onClick={submitForm} className='w-full py-2 mt-4 rounded text-white text-center bg-green-700 hover:bg-green-600 text-xl transition duration-500 ease'>Edit Recipe</button>
        </ul>
      </div>
    </main>
  )
}

export default EditRecipe