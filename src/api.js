import axios from "axios";

//products Api
export const fetch_product_data = async () => {
  const fetch_product = await axios.get("https://dummyjson.com/products");
  return (fetch_product.data.products);
};
// users Api
  export const fetch_users = async () => {
    const {data} = await axios.get("https://auth-api-issb.onrender.com/api/users",{headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTIyMmUwZTRkZGRmYzM0OGU5Yzg5OSIsImlhdCI6MTcyMDg1MzIzOX0.TUUPdnH8tZULfZPQYOAO-R9UqGV9DDSexWuJ0XaLin4"}});
    return (data.Users);
  };
