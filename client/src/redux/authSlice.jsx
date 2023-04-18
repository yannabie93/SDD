import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isFetching: false, 
        isError: false,
        isSuccess: false,

    },
    reducers:{
        resetState: (state) => {
            state.currentUser = null
            state.isFetching = false
            state.isError = false
            state.isSuccess = false
        },
        loginStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = false;
            state.isError = false,
            state.isSuccess = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.isError = true;
        },
        logOut: (state) =>{
            state.currentUser = null;
            state.isSuccess = false;

        },
    }
   
})

export const {loginStart,loginSuccess,loginFailure,logOut, resetState} = authSlice.actions
export default authSlice.reducer
