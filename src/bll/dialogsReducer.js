import {dialogsApi} from '../dal/dialogsApi';
import {reset} from 'redux-form'


const SET_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/SET_MESSAGE';
const GET_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/GET_DIALOGS';
const GET_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/GET_MESSAGE';
const SET_CURRENT_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/SET_CURRENT_DIALOGS';
const SET_LOADING_MESSAGES = 'SOCIAL_NETWORK/DIALOGS/SET_LOADING_MESSAGES';
const SET_LOADING_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/SET_LOADING_DIALOGS';
const SET_NEW_MESSAGES_COUNT = 'SOCIAL_NETWORK/DIALOGS/SET_NEW_MESSAGES_COUNT';
const PUT_UP_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/PUT_UP_DIALOGS';
const SET_CHANGE_NEW_MESSAGES = 'SOCIAL_NETWORK/DIALOGS/SET_CHANGE_NEW_MESSAGES';
const DELETE_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/DELETE_MESSAGE';


let initialState = {
    messages: [],
    dialogs: [],
    currentDialogsId: null,
    loadingMessages: false,
    loadingDialogs: false,
    newMessagesCount: 0,
    currentDialogsMessagesCount: 0,
}

const update = (state, action) => ({...state, ...action.payload})

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
        case GET_MESSAGE:
        case SET_CURRENT_DIALOGS:
        case SET_NEW_MESSAGES_COUNT:
            return update(state, action)
        case SET_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}
        case SET_CHANGE_NEW_MESSAGES:
            return {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if (d.id === Number(action.userId)) {
                        return {...d, hasNewMessages: action.hasNewMessages}
                    } else return d
                })
            }
        case PUT_UP_DIALOGS:
            return {
                ...state, dialogs: [
                    state.dialogs.find(d => d.id === Number(action.userId)),
                    ...state.dialogs.filter(d => d.id !== Number(action.userId))]
            }
        case SET_LOADING_MESSAGES:
            return {...state, loadingMessages: action.loadingMessages}
        case SET_LOADING_DIALOGS:
            return {...state, loadingDialogs: !state.loadingDialogs}
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => {
                    return m.id !== action.messageId
                })
            }
        default:
            return state
    }
}

//AC
export const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, payload: {dialogs}})
export const getMessagesSuccess = (messages) => ({type: GET_MESSAGE, payload: {messages}})
export const setCurrentDialogsId = (currentDialogsId) => ({type: SET_CURRENT_DIALOGS, payload: {currentDialogsId}})
export const setMessageSuccess = (message) => ({type: SET_MESSAGE, message})
export const setHasNewMessages = (userId, hasNewMessages) => ({type: SET_CHANGE_NEW_MESSAGES, userId, hasNewMessages})
export const putUpDialog = (userId) => ({type: PUT_UP_DIALOGS, userId})
export const setLoadingMessagesSuccess = (loadingMessages) => ({type: SET_LOADING_MESSAGES, loadingMessages})
export const setLoadingDialogsSuccess = () => ({type: SET_LOADING_DIALOGS,})
export const deleteMessageSuccess = (messageId) => ({type: DELETE_MESSAGE, messageId})
export const setNewMessagesCountSuccess = (newMessagesCount) => ({
    type: SET_NEW_MESSAGES_COUNT,
    payload: {newMessagesCount}
})

//Thunk
export const init = (userId) => async (dispatch) => {
    if (!!userId) {
        dispatch(getMessages(userId))
        dispatch(setCurrentDialogsId(userId))
        await dispatch(startDialogs(userId))
    }
    dispatch(getDialogs())
    dispatch(setCurrentDialogsId(null))
}
export const updateDialog = (userId) => async (dispatch) => {
    if (!!userId) {
        dispatch(getMessages(userId))
        dispatch(setCurrentDialogsId(userId))
    } else {
        dispatch(setCurrentDialogsId(null))
    }

}

export const getNewMessages = () => async (dispatch, getState) => {
    const state = getState()
    let response = await dialogsApi.getNewMessages()
    if (state.dialogsPage.newMessagesCount !== response) {
        dispatch(setNewMessagesCountSuccess(response))
    }
}

export const getDialogs = () => async (dispatch) => {
    dispatch(setLoadingDialogsSuccess())
    const response = await dialogsApi.getDialogs()
    dispatch(getDialogsSuccess(response))
    dispatch(setLoadingDialogsSuccess())
}

export const getMessages = (userId) => async (dispatch) => {
    dispatch(setLoadingMessagesSuccess(true))
    let response = await dialogsApi.getMessages(userId)
    await dispatch(getMessagesSuccess(response))
    dispatch(setLoadingMessagesSuccess(false))
    dispatch(setCurrentDialogsId(userId))
    dispatch(setHasNewMessages(userId, false))

}

export const startDialogs = (userId) => async (dispatch, getState) => {
    await dialogsApi.startDialogs(userId)
    const dialogs = getState().dialogsPage.dialogs.find(d => d.id === Number(userId))
    if (dialogs) {
        dispatch(putUpDialog(userId))
    }
}

export const sendMessage = (userId, body) => async (dispatch) => {
    let response = await dialogsApi.sendMessage(userId, body)
    dispatch(setMessageSuccess(response.data.message))
    dispatch(setCurrentDialogsId(userId))
    dispatch(startDialogs(userId))
    dispatch(reset('dialogAddMessageForm'))
}

export const deleteMessage = (messageId) => async (dispatch) => {
    await dialogsApi.deleteMessage(messageId)
    dispatch(deleteMessageSuccess(messageId))
}

