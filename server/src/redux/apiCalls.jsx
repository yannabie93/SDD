import { publicRequest } from "../utils/publicRequest";
import { loginFailure, loginStart,loginSuccess } from "./adminSlice";


export const LoginUser = async (user, dispatch) =>{
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/auth/loginTech', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch(loginFailure(errorMessage))
    }
}

