import {profileApi} from '../dall/prifileApi';
import {reset, stopSubmit} from 'redux-form';

const SET_USER_PROFILE = 'SOCIAL_NETWORK/PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'SOCIAL_NETWORK/PROFILE/SET_STATUS';
const SAVE_PHOTO = 'SOCIAL_NETWORK/PROFILE/SAVE_PHOTO';
const EDIT_MODE = 'SOCIAL_NETWORK/PROFILE/EDIT_MODE';
const ADD_POST = 'SOCIAL_NETWORK/PROFILE/ADD-POST';
const DELETE_POST = 'SOCIAL_NETWORK/PROFILE/DELETE_POST';


const initialState = {
    profile: null,
    status: '',
    posts: [],
    editMode: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
        case SET_STATUS:
            return {...state, ...action.payload}
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.file
                }
            }
        case EDIT_MODE:
            return {
                ...state,
                editMode: action.editMode
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {...action.post}],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state
    }
}


//AC
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, payload: {profile}})
export const setStatusSuccess = (status) => ({type: SET_STATUS, payload: {status}})
export const savePhotoSuccess = (file) => ({type: SAVE_PHOTO, file})
export const setEditMode = (editMode) => ({type: EDIT_MODE, editMode})
export const addPostSuccess = (post) => ({type: ADD_POST, post})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

//Thunks
export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await profileApi.setUserProfile(userId)
    dispatch(setUserProfileSuccess(response.data))
}

export const addPost = (newPostText) => async (dispatch) => {
    let post = {
        id: Math.floor(Math.random() * 100),
        message: newPostText,
        likeCounts: '0',
    }
    dispatch(addPostSuccess(post))
    dispatch(reset('profileAddNewPostForm'))

}

export const setStatus = (userId) => async (dispatch) => {
    let response = await profileApi.setStatus(userId)
    dispatch(setStatusSuccess(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusSuccess(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId))
        dispatch(setEditMode(false))
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('editProfile', {_error: messages}))
        return Promise.reject(messages)
    }
}