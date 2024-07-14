import axios from "axios";

 
export const fetch_data =async()=>
{
  const product_data = await axios.get("https://dummyjson.com/products")
  return product_data.data.products;
}