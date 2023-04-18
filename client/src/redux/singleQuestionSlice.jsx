import { createSlice } from "@reduxjs/toolkit";


export const singleQuestionSlice = createSlice({
    name: 'singlequestion',
    initialState: {
        singlequestion: null,
        isFetching: false,
        isError: false,
    },
    reducers: {
        resetState: (state) =>{
            state.singlequestion = null;
            state.isFetching = false
            state.isError = false
        },
        getSingleQuestionsStart: (state) =>{
            state.isFetching = true
            state.isError = false
        },
        getSingleQuestionSuccess: (state, action) =>{
            state.isFetching = false
            state.singlequestion = action.payload
        },
        getSingleQuestionFailure: (state) =>{
            state.isFetching = false
            state.isError = true
        },
    
        
    }
})

export const {resetState,getSingleQuestionsStart,getSingleQuestionSuccess,getSingleQuestionFailure} = singleQuestionSlice.actions
export default singleQuestionSlice.reducer