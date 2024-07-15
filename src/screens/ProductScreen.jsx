import ProductCardComponent from "../components/ProductCardComponent";
import { fetch_product_data } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const ProductScreen = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((e) => e.productReducer);
  const fetch_Dummy_Product = async () => {
    const fetch_Dummy_Product_Data = await fetch_product_data();
    dispatch({ type: "addProducts", payload: fetch_Dummy_Product_Data });
  };
  useEffect(() => {
    if (!products.length) {
      fetch_Dummy_Product();
    }
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-3 mt-3 ">
        {products.map((e) => (
          <ProductCardComponent
            key={e.id}
            thumbnail={e.thumbnail}
            title={e.title}
            description={e.description}
            stock={e.stock}
            price={e.price}
            category={e.category}
            btn={"Add to Cart"}
          />
        ))}
      </div>
    </>
  );
};

export default ProductScreen;
