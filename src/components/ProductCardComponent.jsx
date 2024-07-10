import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCardComponent = ({category,thumbnail,title,description,price,stock,btn}) => {
  const dispatch = useDispatch();
  const handleEvent = ()=>
  {
    dispatch({type:"countProducts"})
  }
  return (
  <>
    <div className='w-96 h-4/5 p-2 text-md font-serif shadow-md text-slate-500  bg-blue-200 rounded-2xl flex flex-col'>
    <span className='text-white'>{category}</span>
      <img className='w-64  ml-6' src={thumbnail} alt="" />
      <h3 className='font-medium text-slate-800 text-2xl'>{title}</h3>
      <p className=' m-1'>{description}</p>
      
    <div className='flex m-1 px-1'>
      <span className='mr-6 bg-white rounded-lg shadow-md'>stock:{stock}</span>
      <span className='bg-white rounded-lg shadow-md'>price:${price}</span>
     </div>
     <div>

      <button onClick={handleEvent} className='bg-gray-200 m-1 p-1 cursor-pointer rounded-lg shadow-md'>{btn}</button>
     </div>
    </div>
    </>
  )
}

export default ProductCardComponent