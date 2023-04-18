import { publicRequest } from "../utils/publicRequest";
import { loginFailure, loginStart,loginSuccess } from "./authSlice";
import {getQuestionSuccess,getQuestionFailure, getQuestionStart} from './questionSlice'
import { getSingleQuestionsStart, getSingleQuestionSuccess, getSingleQuestionFailure } from "./singleQuestionSlice";


//Auth
export const LoginUser = async (user, dispatch) =>{
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/auth/user', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}


export const GetAllQuestion = async (category, part, dispatch) =>{
    dispatch(getQuestionStart())
    
    try {
        const res = await publicRequest.get(`/questions/getQuestion?category=${category}&part=part${part}`)
        dispatch(getQuestionSuccess(res.data))
    } catch (error) {
        dispatch(getQuestionFailure())
    }
}

export const GetSingleQuestion = async (category, part, id, dispatch) =>{

    dispatch(getSingleQuestionsStart())
    try {
        const res = await publicRequest.get(`/${category}/${category}${part}/questiontype/${id}`)
        console.log(res.data)
        dispatch(getSingleQuestionSuccess(res.data))
    } catch (error) {
        dispatch(getSingleQuestionFailure())
    }
}