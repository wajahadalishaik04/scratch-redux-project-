import axios from "axios";
import { useEffect } from "react";
//products Api
export const fetch_product_data = async () => {
  const fetch_product = await axios.get("https://dummyjson.com/products");
  return (fetch_product.data.products);
};
// users Api
  export const fetch_users = async () => {
    const fetch_Users_Data = await axios.get("https://dummyjson.com/users");
    return (fetch_Users_Data.data.users);
  };
