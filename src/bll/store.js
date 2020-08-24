import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';
import {profileReducer} from './profileReducer';
import {authReducer} from './authReducer';
import {appReducer} from './appReduсer';
import {usersReducer} from './usersReducer';
import {friendsReducer} from './friendsReducer';
import {dialogsReducer} from './dialogsReducer';

const reducers = combineReducers({
    form: formReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    app: appReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))