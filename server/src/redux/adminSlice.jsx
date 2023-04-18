import { createSlice } from "@reduxjs/toolkit";
export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: null,
        isFetching : false,
        isError: false,
        isSuccess: false,
        isUpdated: false,
        isMessage: "",
    },
    reducers: {
        resetState: (state) =>{
            state.admin = null;
            state.isFetching = false
            state.isError = false
            state.isSuccess = false
            state.isUpdated = false
            state.isMessage = ""

        },
        loginStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = true;
            state.isSuccess = true;
            state.admin = action.payload,
            state.isMessage = "";
        },
        loginFailure: (state, action) =>{
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.isMessage = action.payload;

        }, 
        logOut: (state) =>{
            state.admin = null;
        },

    }

})

export const {resetState, loginStart, loginSuccess, loginFailure, logOut } = adminSlice.actions;
export default adminSlice.reducer