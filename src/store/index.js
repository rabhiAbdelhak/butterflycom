import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../features/component/componentSlice";
import contactReducer from "../features/contact/contactSlice";



const store = configureStore({
    reducer : {
        component : componentReducer,
        contact: contactReducer,
    }
});


export default store;