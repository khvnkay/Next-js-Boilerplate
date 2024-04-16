// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    showLoader: false

};

// ==============================|| SLICE - MENU ||============================== //

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        // activeItem(state, action) {
        //   state.openItem = action.payload.openItem;
        // },

        // activeComponent(state, action) {
        //   state.openComponent = action.payload.openComponent;
        // },

        // openDrawer(state, action) {
        //   state.drawerOpen = action.payload.drawerOpen;
        // },

        // openComponentDrawer(state, action) {
        //   state.componentDrawerOpen = action.payload.componentDrawerOpen;
        // },
        setShowLoader(state, action) {
            state.showLoader = action.payload
        }
    }
});

export default loaderSlice.reducer;

export const { setShowLoader } = loaderSlice.actions;

