import React from 'react'
import { Link } from 'react-router-dom'
import { GiHotMeal } from 'react-icons/gi'
import { BsPencil } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

const RecipeItem = ({recipe, id, onEdit, onDelete}) => {
  return (
    <li className='flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition duration-500 ease'>
      <Link to={`/recipes/${id}`} className='my-4 contents'>
        <img loading='lazy' src={[recipe[0].imgUrls[0]]} alt="Recipe Image" className='h-[170px] w-full object-cover hover:scale-110 transition duration-500 ease' />
        <div className='flex items-center w-full space-x-4 p-2 border-b '>
          <GiHotMeal size={25} className='text-orange-600' />
          <p className='text-xl font-semibold text-gray-500'>{[recipe[0].items[0].title]}</p>
        </div>
      </Link>
      <div className='flex justify-between items-center w-full mt-4 p-2'>
          {onEdit && <BsPencil size={20} className='text-blue-700 cursor-pointer' onClick={() => onEdit(recipe.id)} />}
          {onDelete && <AiFillDelete size={20} className='text-red-600 cursor-pointer' onClick={() => onDelete(recipe.id)} />}
        </div>
    </li>
  )
}

export default RecipeItem

// [recipe[0].items[0].name]