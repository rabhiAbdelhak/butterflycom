import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    contactFormIsOpen: false,
    contactType:'',
    title: '',
}




const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        openContact : ( state , {payload : {type , title}}) => {
            state.contactFormIsOpen = true;
            state.contactType = type;
            state.title = title;
        },
        closeContact : ( state ) => {
            state.contactFormIsOpen = false
        }
    }
});

export const {openContact, closeContact} = contactSlice.actions

export default contactSlice.reducer