import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../features/component/componentSlice";



const store = configureStore({
    reducer : {
        component : componentReducer,
    }
});


export default store