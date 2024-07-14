import { useEffect } from 'react';
import ProductCardComponent from '../components/UsercardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_data } from '../api';


const ProductScreen = () =>
{
  const {products} = useSelector((e)=>e.productReducer);
  const dispatch = useDispatch();
  const fetch_dummy_products=async() =>
  {
    const {data} = await fetch_data();
    dispatch({type:"addProducts",payload:data})
  }
  useEffect(()=>{
    fetch_dummy_products()
  },[])
  return (
    <>
    <div className='flex flex-wrap gap-3 mt-3 '>
     {products.map((e)=><ProductCardComponent
     key={e.id}
    
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