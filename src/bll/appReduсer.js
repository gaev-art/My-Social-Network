import {getAuthUserDate} from './authReducer';
import {getNewMessages} from './dialogsReducer';

export const SET_INITIALIZED = 'SOCIAL_NETWORK/APP/SET_INITIALIZED';


let initialState = {
    initialized: false,

}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


//AC
export const initializedSuccess = () => ({type: SET_INITIALIZED})


//Thunk
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserDate());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
        dispatch(getNewMessages())
    })

}
