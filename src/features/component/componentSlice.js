import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    SideBarIsOpen : false,
    ModalIsOpen: false
}



const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        openSideBar : (state) => {
            state.SideBarIsOpen = true;
        },
        closeSideBar : (state) => {
            state.SideBarIsOpen = false;
        },
        openModal : (state) => {
            state.ModalIsOpen = true;
        },
        closeModal : (state) => {
            state.ModalIsOpen = false;
        }
    }
});



export const {openSideBar, closeSideBar, openModal, closeModal} = componentSlice.actions;

export default componentSlice.reducer;