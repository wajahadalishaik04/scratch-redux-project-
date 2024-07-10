import React, { useEffect } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const ProductScreen = () => {
  const {products} = useSelector((e)=>e.productReducer);
  const dispatch = useDispatch();
    const callProductApiData =  async ()=>
    {
     const {data}= await axios.get("https://dummyjson.com/products");
     dispatch({type:"addProducts",payload:data.products})
     console.log(data);
     
    }
    useEffect(()=>{
      if(!products.length)
      {
        callProductApiData();

      }
    },[])
  return (
    <>
    <div className='flex flex-wrap gap-3 mt-3 '>
      {products.map((e)=><ProductCardComponent 
     id={e.id}
     thumbnail={e.thumbnail}
     title={e.title}
     description={e.description}
     stock={e.stock}
     price={e.price}
     category={e.category}
     btn={"Add to Cart"}/>)}
    </div>
     
    </>
  )
}

export default ProductScreen