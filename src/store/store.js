import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer,productCount,userCount } from "./reducer";
const store = configureStore({
    reducer:{userReducer,productReducer,productCount,userCount}
})
export default store;