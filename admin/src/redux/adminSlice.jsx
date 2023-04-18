import { createSlice } from "@reduxjs/toolkit";
export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: null,
        isFetching : false,
        isError: false,
        isSuccess: false,
        isUpdated: false,
    },
    reducers: {
        resetState: (state) =>{
            state.admin = null;
            state.isFetching = false
            state.isError = false
            state.isSuccess = false
            state.isUpdated = false

        },
        loginStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = true;
            state.isSuccess = true;
            state.admin = action.payload
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.isError = true;
        }, 
        logOut: (state) =>{
            state.admin = null;
            state.isSuccess = false;

        },

    }

})

export const {resetState, loginStart, loginSuccess, loginFailure, logOut } = adminSlice.actions;
export default adminSlice.reducer