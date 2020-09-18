import {authApi} from '../dal/authApi';
import {stopSubmit} from 'redux-form';


export const SET_USER_DATE = 'SOCIAL_NETWORK/AUTH/SET_USER_DATE';
export const GET_CAPTCHA_URL = 'SOCIAL_NETWORK/AUTH/GET_CAPTCHA_URL';


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

//AC

export const setAuthUserDate = (id, email, login, isAuth) => ({
    type: SET_USER_DATE,
    payload: {id, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (url) => ({type: GET_CAPTCHA_URL, url})

//Thunk

export const getAuthUserDate = () => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setAuthUserDate(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    try {
        alert('1')
        let response = await authApi.login(email, password, rememberMe, captcha)
        alert('3')

        if (response.data.resultCode === 0) {
            alert('4')
            dispatch(getAuthUserDate())
            alert('5')
        } else {
            if (response.data.resultCode === 10) {
                alert('6')
                dispatch(getCaptchaUrl())
                alert('7')
            }
            alert('8')
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            alert('9')
            dispatch(stopSubmit('login', {_error: messages}))
            alert('10')
        }
    } catch (e) {
      alert(JSON.stringify(e.message) + 'error')
    }

}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDate(null, null, null, false))
    }
}