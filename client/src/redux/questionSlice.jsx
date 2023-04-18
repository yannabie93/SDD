import { createSlice } from "@reduxjs/toolkit";


export const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        isFetching: false,
        isError: false,
    },
    reducers: {
        resetState: (state) =>{
            state.questions = []
            state.isFetching = false
            state.isError = false
        },
        getQuestionStart: (state) =>{
            state.isFetching = true
            state.isError = false
        },
        getQuestionSuccess: (state, action) =>{
            state.isFetching = false
            state.questions = action.payload
        },
        getQuestionFailure: (state) =>{
            state.isFetching = false
            state.isError = true
        },
    
        
    }
})

export const {resetState,getQuestionStart,getQuestionSuccess,getQuestionFailure} = questionSlice.actions
export default questionSlice.reducer